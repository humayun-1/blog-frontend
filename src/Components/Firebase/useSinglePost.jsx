import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';

const useSinglePost = (postId) => {
    const [Data, setData] = useState([]);
    const [NotFound, setNotFound] = useState();

    useEffect(() => {
        if (postId) {
            const docRef = doc(db, "blogs", postId);
            getDoc(docRef).then(doc => {
                setData(doc.data())
            }).catch(err => {
                console.log("ERROR::", err);
                setNotFound(true)
            })
        } else {
            setNotFound(true)
        }
    }, [postId])

    return { Data, NotFound }
}

export default useSinglePost