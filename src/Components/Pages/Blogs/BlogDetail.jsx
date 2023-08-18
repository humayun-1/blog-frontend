import React, { useEffect, useState } from 'react'
import Wrapper from '../../Elements/Layout/Wrapper'
import API_DATA from '../../../API/API_DATA';
import SimpleCard from '../../Elements/Cards/SimpleCard';

const BlogDetail = () => {
    const [Related, setRelated] = useState([]);
    const [Current, setCurrent] = useState([]);
    const API = API_DATA();
    const searchParams = new URLSearchParams(window.location.search);



    useEffect(() => {
        const news_id = searchParams.get('news_id');
        console.log(news_id);
        if (news_id) {
            fetch(API.BASE_URL + API.GET_BLOGS)
                .then(resp => resp.json())
                .then(data => {
                    if (data?.data) {
                        const filteredItems = (data?.data).filter(item => item.image.includes("data:application/image;base64") && item._id != news_id);
                        const current = ((data?.data).filter(item => item.image.includes("data:application/image;base64"))).filter(item => item._id == news_id);
                        setCurrent(...current);
                        setRelated(filteredItems);
                    }
                })
        } else {
            console.log('asd');
        }
    }, [])
    return (
        <>
            <Wrapper>
                <div className="bg-gray-100 min-h-screen">
                    <div className="bg-white py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="lg:text-center">
                                <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                                    {Current?.title}
                                </h1>
                                <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                                <div className="lg:col-span-8">
                                    <div className='h-[24rem]'>
                                        <img src={Current?.image} className='bg-gray-100 object-cover object-center h-full w-full brightness-75 group-hover:scale-[1.12] group-hover:rotate-3 group-hover:brightness-100 transition-all  inset-0 z-[1]' alt="" />
                                    </div>
                                    <div className="prose max-w-none py-3" dangerouslySetInnerHTML={{ __html: Current?.description }}></div>
                                </div>
                                <div className="mt-10 lg:mt-0 lg:col-span-4">
                                    <div className="bg-white overflow-hidden shadow rounded-lg">
                                        <div className="p-5">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Related Articles</h3>
                                            <ul className="mt-4">
                                                {
                                                    Related?.map(ele => {
                                                        return <SimpleCard description={ele?.description} title={ele?.title} image={ele?.image} id={ele?._id} />
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default BlogDetail