import React, { useEffect, useState } from 'react'
import DashboardWrapper from '../../Elements/Layout/DashboardWrapper'
import FlexCol from '../../Elements/Layout/FlexCol'
import FlexRow from '../../Elements/Layout/FlexRow'
import Form from '../../Elements/Form/Form'
import { useNavigate } from 'react-router-dom'
import Svgs from '../../Elements/Svgs'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'
import AdminCard from '../../Elements/Cards/AdminCard'
import { toast } from 'react-toastify'


const Blogs = () => {
    const navigate = useNavigate();
    const [AllBlogs, setAllBlogs] = useState([]);
    const notify = (text) => toast.success(text);

    useEffect(() => {
        const blogref = collection(db, "blogs");
        const q = query(blogref);

        onSnapshot(q, (snapshot) => {
            // console.log(snap,"snapsnapsnapsnap");
            const allBlogs = snapshot.docs.map((docs) => {
                return {
                    id: docs.id,
                    ...docs.data()
                }
            });
            setAllBlogs(allBlogs);
        })
    }, [])

    const deleteFn = async (postId) => {
        let check = window.confirm('Do you want to delete this blog?');
        if(check){
            try {
                const docRef = doc(db,"blogs",postId);
                deleteDoc(docRef).then(()=>{
                    notify('Deleted successfully!');
                })
            } catch (error) {
                console.error('Error deleting document:', error);
            }
        }
    }
    return (
        <DashboardWrapper>
            <FlexCol className={'gap-6'}>
                <FlexRow className={'justify-between'}>
                    <h1 className='text-[2rem] font-semibold'>Blogs</h1>
                    <Form.Button onClick={() => {
                        navigate('/admin/blog/create')
                    }}>
                        <FlexRow>
                            <div>
                                <Svgs.Plus />
                            </div>
                            <p> Add Blog</p>
                        </FlexRow>
                    </Form.Button>
                </FlexRow>
                <div>
                    <div className='grid xl:grid-cols-4 md:grid-cols-3 gap-6'>
                        {
                            AllBlogs.map(ele => {
                                console.log(ele);
                                return <AdminCard delete_={() => {
                                    deleteFn(ele?.id)
                                }} title={ele?.title} description={ele?.description} image={ele?.image} />
                            })
                        }
                    </div>
                </div>
            </FlexCol>
        </DashboardWrapper>
    )
}

export default Blogs