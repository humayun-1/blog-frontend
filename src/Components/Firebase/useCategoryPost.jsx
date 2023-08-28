import { useEffect, useState } from "react";
import useFetchPosts from "./useFetchPosts";
import { collection, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// const useFilteredData = (categoryName) => {
//     const [filteredData, setFilteredData] = useState([]);
//     useEffect(() => {
//         const blogref = collection(db, "blogs");
//         const news = query(blogref, where("category", "==", categoryName));
//         onSnapshot(news, (snapshot) => {
//             const allBlogs = snapshot.docs.map((docs) => {
//                 return {
//                     id: docs.id,
//                     ...docs.data()
//                 }
//             });
//             setFilteredData(allBlogs)
//         });
//     }, [categoryName]);

//     return filteredData;
// };

// export default useFilteredData



const useFilteredData = (categoryName, dataRange) => {
    const [loading, setLoading] = useState(true);
    const [noDataFound, setNoDataFound] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (categoryName) {

            const blogref = collection(db, "blogs");
            let news;

            if (dataRange) {
                news = query(
                    blogref,
                    where("category", "==", categoryName),
                    orderBy('CreatedAt', 'desc'), // Order by CreatedAt in descending order (newest first)
                    limit(+dataRange) // Limit the query to retrieve only the first 10 blogs
                );
            } else {
                news = query(
                    blogref,
                    where("category", "==", categoryName),
                    orderBy('CreatedAt', 'desc'), // Order by CreatedAt in descending order (newest first)
                    limit(16) // Limit the query to retrieve only the first 10 blogs
                );
            }
            const unsubscribe = onSnapshot(news, (snapshot) => {
                if (snapshot.empty) {
                    setNoDataFound(true);
                } else {
                    const allBlogs = snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        };
                    });
                    setFilteredData(allBlogs);
                    setNoDataFound(false);
                }
                setLoading(false);
            });
            return () => unsubscribe();
        }
    }, [categoryName]);

    return { loading, noDataFound, filteredData };
};

export default useFilteredData;