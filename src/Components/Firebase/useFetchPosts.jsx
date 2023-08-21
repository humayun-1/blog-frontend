import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";

const useFetchPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const blogref = collection(db, "blogs");
                const q = query(blogref);

                onSnapshot(q, (snapshot) => {
                    const allBlogs = snapshot.docs.map((docs) => {
                        return {
                            id: docs.id,
                            ...docs.data()
                        }
                    });
                    setPosts(allBlogs);
                    setLoading(false);
                });


            } catch (error) {
                console.error('Error fetching posts:', error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return { posts, loading };
}

export default useFetchPosts