import { useEffect, useState } from "react";
import useFetchPosts from "./useFetchPosts";
import { collection, onSnapshot, query, where } from "firebase/firestore";
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



const useFilteredData = (categoryName) => {
    const [loading, setLoading] = useState(true);
    const [noDataFound, setNoDataFound] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const blogref = collection(db, "blogs");
        const news = query(blogref, where("category", "==", categoryName));

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
    }, [categoryName]);

    return { loading, noDataFound, filteredData };
};

export default useFilteredData;