import React, { useEffect, useState } from 'react'
import Wrapper from '../../Elements/Layout/Wrapper'
import FlexCol from '../../Elements/Layout/FlexCol'
import LargeCard from '../../Elements/Cards/LargeCard'
import SmallCard from '../../Elements/Cards/SmallCard'
import TypeSticker from '../../Elements/Cards/TypeSticker'
import SimpleCard from '../../Elements/Cards/SimpleCard'
import FlexRow from '../../Elements/Layout/FlexRow'
import VideoCard from '../../Elements/Cards/VideoCard'
import Svgs from '../../Elements/Svgs'
import SimpleCardShimmer from '../../Elements/Cards/Shimmer/SimpleCardShimmer'
import Categories from '../../Data/Categories'
import useFilteredData from '../../Firebase/useCategoryPost'
import NoRecordFound from '../../Elements/Cards/NoRecordFound'
import Form from '../../Elements/Form/Form'
import { useNavigate } from 'react-router-dom'


const Home = () => {

    // Getting All Blogs for Category
    // const [AllBlogs, setAllBlogs] = useState([]);
    // const { posts, loading } = useFetchPosts();
    // useEffect(() => {
    //     setAllBlogs(posts);
    // }, [posts])

    // Categories
    const [Bloglatest, setBloglatest] = useState([]);
    const { loading: loadingLATEST, noDataFound2, filteredData: LATEST } = useFilteredData(Categories['LATEST']);
    useEffect(() => {
        setBloglatest(LATEST);
    }, [LATEST]);

    const [BlogNews, setBlogNews] = useState([]);
    const { loading: loadingNEWS, noDataFound, filteredData: NEWS } = useFilteredData(Categories['NEWS'], 12);

    useEffect(() => {
        setBlogNews(NEWS);
    }, [NEWS]);

    const [BlogSport, setBlogSport] = useState([]);
    const { loading: loadingSPORT, noDataFound3, filteredData: SPORT } = useFilteredData(Categories['SPORT']);
    useEffect(() => {
        setBlogSport(SPORT);
    }, [SPORT]);

    const [BlogAsia, setBlogAsia] = useState([]);
    const { loading: loadingASIA, noDataFound4, filteredData: ASIA } = useFilteredData(Categories['ASIA']);
    useEffect(() => {
        setBlogAsia(ASIA);
    }, [ASIA]);



    const [BlogCulture, setBlogCulture] = useState([]);
    const { loading: loadingCulture, noDataFound5, filteredData: CULTURE } = useFilteredData(Categories['CULTURE']);
    useEffect(() => {
        setBlogCulture(CULTURE);
    }, [CULTURE]);


    const [BlogEditor, setBlogEditor] = useState([]);
    const { loading: loadingEditor, noDataFound6, filteredData: Editor } = useFilteredData(Categories['EDITOR’S PICKS']);
    useEffect(() => {
        setBlogEditor(Editor);
    }, [Editor]);

    const [BlogNewLatest, setBlogNewLatest] = useState([]);
    const { loading: loadingNewLatest, noDataFound7, filteredData: NewLatest } = useFilteredData(Categories['ASIA'], 30);
    useEffect(() => {
        setBlogNewLatest(NewLatest.slice(16, 30));
    }, [NewLatest]);

    const [BlogFUTURE, setBlogFUTURE] = useState([]);
    const { loading: loadingFUTURE, noDataFound8, filteredData: FUTURE } = useFilteredData(Categories['FUTURE'], 3);
    useEffect(() => {
        setBlogFUTURE(FUTURE);
    }, [FUTURE]);



    const navigate = useNavigate()

    return (
        <Wrapper>
            <FlexCol className='gap-10 py-[2rem]'>
                <FlexCol className={'container gap-3'}>
                    <h1 className='text-[#4a4a4a] font-semibold text-xl'>Welcome to Kazakhstan<span className='text-yellow-500'>Review</span>.com</h1>
                    <div className='grid lg:grid-cols-2 lg:h-[25rem] min-h-[25rem] gap-3'>
                        <LargeCard no_sticker data={CULTURE[0]} title="" description="" image="" />
                        <div className='grid md:grid-cols-2 gap-3'>
                            <SmallCard no_sticker data={CULTURE[1]} />
                            <SmallCard no_sticker data={CULTURE[2]} />
                            <SmallCard no_sticker data={CULTURE[3]} />
                            <SmallCard no_sticker data={CULTURE[4]} />
                        </div>
                    </div>
                </FlexCol>

                <FlexCol className={'container gap-3'}>
                    <TypeSticker color={'bg-red-500'} size={'lg'} text={'News'} textClass={'!text-[#000]'} />
                    <div className='grid xl:grid-cols-3 sm:grid-cols-2 gap-4'>
                        {
                            !loadingNEWS ?
                                BlogNews?.map(ele => {
                                    return <SimpleCard url={ele?.url} type={ele?.category} id={ele?.id} description={ele?.description} title={ele?.title} className="!h-[14rem]" image={ele?.image} />
                                })
                                :
                                <>
                                    {[0, 0, 0, 0, 0, 0].map(ele => {
                                        return <SimpleCardShimmer />
                                    })}
                                </>
                        }

                    </div>
                    {/* {
                        BlogNews?.length > 10 && <FlexRow className={'justify-center mt-[2rem]'}><Form.Button onClick={() => {
                            navigate('/category/news')
                        }}>See All <Svgs.Arrow /></Form.Button></FlexRow>
                    } */}
                </FlexCol>

                {/* <FlexCol className={'container gap-3'}>
                    <TypeSticker color={'bg-yellow-500'} size={'lg'} text={'Sport'} textClass={'!text-[#000]'} />
                    <div className='grid xl:grid-cols-3 sm:grid-cols-2 gap-4'>
                        {
                            !loadingSPORT ?
                                BlogSport?.length > 0 ? BlogSport?.map(ele => {
                                    return <SimpleCard url={ele?.url} type={ele?.category} id={ele?.id} description={ele?.description} title={ele?.title} className="!h-[14rem]" image={ele?.image} />
                                }) : <NoRecordFound />
                                : <>
                                    {[0, 0, 0, 0, 0, 0].map(ele => {
                                        return <SimpleCardShimmer />
                                    })}
                                </>
                        }
                    </div>
                    {
                        BlogSport?.length > 10 && <FlexRow className={'justify-center mt-[2rem]'}><Form.Button onClick={() => {
                            navigate('/category/sport')
                        }}>See All <Svgs.Arrow /></Form.Button></FlexRow>
                    }
                </FlexCol> */}


                <div className='reel_bg'>
                    <FlexCol className='container py-[2rem] gap-8'>
                        <FlexRow className='justify-between text-white'>
                            <div>
                                <h1 className='text-[3rem] leading-[1]'>Best Videos</h1>
                                <p>The most amazing videos showcased on the Kazakhstan Review</p>
                            </div>
                            {/* <div>
                                <button className='border border-white px-4 py-1.5 flex items-center gap-2 rounded-full hover:bg-black transition-all whitespace-nowrap'>
                                    <p>Visit Reel</p>
                                    <Svgs.Arrow />
                                </button>
                            </div> */}
                        </FlexRow>
                        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                            {
                                [
                                    {
                                        title: "Short trip to Kazakhstan | Heaven on Earth",
                                        url: "https://www.youtube.com/watch?v=jx5TZbkUgBs"
                                    },
                                    {
                                        title: "Kazakhstan Travel Guide: 11 BEST Places to Visit in Kazakhstan",
                                        url: "https://www.youtube.com/watch?v=kVDLM8DfNFE"
                                    },
                                    {
                                        title: 'The nature of kazakhstan | Natural wonders of kazakhstan',
                                        url: "https://www.youtube.com/watch?v=-aoqapsL-s0"
                                    },
                                ].map(ele => {
                                    return <VideoCard data={ele} type={'sports'} />
                                })
                            }
                        </div>
                    </FlexCol>
                </div>


                {/* <FlexCol className={'container gap-3'}>
                    <TypeSticker color={'bg-yellow-500'} size={'lg'} text={'Asia News'} textClass={'!text-[#000]'} />
                    <div className='grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4'>
                        {
                            !loadingASIA ?
                                BlogAsia?.length > 0 ? BlogAsia?.map(ele => {
                                    return <SimpleCard url={ele?.url} type={ele?.category} id={ele?.id} description={ele?.description} title={ele?.title} className="!h-[14rem]" image={ele?.image} />
                                }) : <NoRecordFound />
                                :
                                <>
                                    {[0, 0, 0, 0, 0, 0].map(ele => {
                                        return <SimpleCardShimmer />
                                    })}
                                </>
                        }
                    </div>
                    {
                        BlogAsia?.length > 10 && <FlexRow className={'justify-center mt-[2rem]'}><Form.Button onClick={() => {
                            navigate('/category/asia')
                        }}>See All <Svgs.Arrow /></Form.Button></FlexRow>
                    }
                </FlexCol> */}

                {/* <div className='bg-[#f6f6f6]'>
                    <FlexCol className={'container gap-3 py-[2.5rem]'}>
                        <TypeSticker color={'bg-[#47a1d8]'} size={'lg'} text={'Editor’s Picks'} textClass={'!text-[#000]'} />
                        <div className='grid lg:grid-cols-6 grid-cols-1 gap-4'>
                            <div className='lg:col-span-4'>
                                <FlexCol className={'gap-4'}>
                                    <div className='h-[30rem]'>
                                        <LargeCard data={BlogEditor[0]} />
                                    </div>
                                    <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                                        {
                                            !loadingEditor ?
                                                BlogEditor?.slice(1, 7).map(ele => {
                                                    return <SimpleCard url={ele?.url} type={ele?.category} id={ele?.id} description={ele?.description} title={ele?.title} image={ele?.image} className={'!h-[10rem]'} />
                                                })
                                                :
                                                [0, 0, 0, 0, 0, 0].map(ele => <SimpleCardShimmer />)
                                        }
                                    </div>
                                </FlexCol>
                            </div>
                            <div className='lg:col-span-2'>
                                <div className='bg-[#ea1801] px-3 py-2 text-white'>
                                    <p className='font-semibold'>LATEST TRENDING NEWS</p>
                                </div>
                                {
                                    Bloglatest?.slice(0, 5).map((ele, i) => {
                                        return <div className='px-8 py-10 flex items-center gap-3 odd:bg-[#363636] bg-[#2f2f2f] cursor-pointer' onClick={() => {
                                            window.open(`${ele?.url}`, '_blank');
                                        }}>
                                            <div>
                                                <div className='h-[3rem] w-[3rem] rounded-full bg-[#ea1801] flex items-center justify-center italic text-lg text-white'>
                                                    {i + 1}
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[#d3d3d3] transition-all hover:text-white text-xl font-semibold'>{ele?.title}</p>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </FlexCol>
                </div> */}

                <div className='nature_bg'>
                    <FlexCol className='container py-[2rem] gap-8'>
                        <FlexRow className='justify-between text-white'>
                            <FlexCol>
                                <button className='text-[1.3rem] w-fit border-2 border-[#2F8735] px-2'>Future Planet</button>
                                <p>Solutions for a sustainable world</p>
                            </FlexCol>
                            <div>
                                <button className='border border-white px-4 py-1.5 flex items-center gap-2 rounded-full hover:bg-black transition-all'>
                                    <p>Visit Future Planet</p>
                                    <Svgs.Arrow />
                                </button>
                            </div>
                        </FlexRow>
                        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                            {
                                BlogFUTURE.map(ele => {
                                    return <VideoCard data={ele} no_play={true} type={ele} />
                                }) 
                            }
                          
                        </div>
                    </FlexCol>
                </div>


                <FlexCol className={'container gap-3'}>
                    <TypeSticker color={'bg-green-500'} size={'lg'} text={"Latest Updates"} textClass={'!text-[#000]'} />
                    <div className='grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4'>
                        {
                            !loadingLATEST ?
                                Bloglatest?.length > 0 ? Bloglatest?.map(ele => {
                                    return <SimpleCard  url={ele?.url} type={ele?.category} id={ele?.id} description={ele?.description} title={ele?.title} className="!h-[14rem]" image={ele?.image} />
                                }) : <NoRecordFound /> :
                                <>
                                    {[0, 0, 0, 0, 0, 0].map(ele => {
                                        return <SimpleCardShimmer />
                                    })}
                                </>
                        }
                    </div>
                    {/* {
                        Bloglatest?.length > 10 && <FlexRow className={'justify-center mt-[2rem]'}><Form.Button onClick={() => {
                            navigate('/category/latest')
                        }}>See All <Svgs.Arrow /></Form.Button></FlexRow>
                    } */}
                </FlexCol>


                {/* <div className='bg-[#f6f6f6]'>
                    <FlexCol className={'container gap-3 py-[2.5rem]'}>
                        <TypeSticker color={'bg-[#47a1d8]'} size={'lg'} text={'More from the Kazakhstan Review'} textClass={'!text-[#000]'} />
                        <div className='grid lg:grid-cols-6 grid-cols-1 gap-4'>
                            <div className='lg:col-span-2'>
                                <div className='bg-[#ea1801] px-3 py-2 text-white'>
                                    <p className='font-semibold'>LATEST BUSINESS NEWS</p>
                                </div>
                                {
                                    BlogNewLatest?.slice(0, 5).map((ele, i) => {
                                        return <div className='px-8 py-10 flex items-center gap-3 odd:bg-[#363636] bg-[#2f2f2f] cursor-pointer' onClick={() => {
                                            window.open(`${ele?.url}`, '_blank');
                                        }}>
                                            <div>
                                                <div className='h-[3rem] w-[3rem] rounded-full bg-[#ea1801] flex items-center justify-center italic text-lg text-white'>
                                                    {i + 1}
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-[#d3d3d3] transition-all hover:text-white text-xl font-semibold'>{ele?.title}</p>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            <div className='lg:col-span-4'>
                                <FlexCol className={'gap-4'}>
                                    <div className='h-[30rem]'>
                                        <LargeCard data={BlogNewLatest[6]} />
                                    </div>
                                    <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                                        {
                                            !loadingNewLatest ?
                                                BlogNewLatest.slice(0,6)?.map(ele => {
                                                    return <SimpleCard  url={ele?.url} type={ele?.category} id={ele?.id} description={ele?.description} title={ele?.title} className="!h-[14rem]" image={ele?.image} />
                                                })
                                                :
                                                <>
                                                    {[0, 0, 0, 0, 0, 0].map(ele => {
                                                        return <SimpleCardShimmer />
                                                    })}
                                                </>
                                        }
                                    </div>
                                </FlexCol>
                            </div>
                        </div>
                    </FlexCol>
                </div> */}




                {/* <div className='bg-white'>
                    <FlexCol className={'container gap-6'}>
                        <h1 className='text-[1.5rem] text-[#4a4a4a]'>Kazakhstan Review IN OTHER LANGUAGES</h1>
                        <div className='grid xl:grid-cols-7 md:grid-cols-5 grid-cols-2 gap-5'>
                            {
                                [
                                    { en: 'Arabic', tr: ' عربي ' },
                                    { en: 'Chinese', tr: ' 中文网 ' },
                                    { en: 'Indonesian', tr: 'INDONESIA' },
                                    { en: 'Kyrgyz', tr: 'Кыргыз' },
                                    { en: 'Persian', tr: 'فارسی' },
                                    { en: 'Somali', tr: 'SOMALI' },
                                    { en: 'Turkish ', tr: 'TÜRKÇE' },
                                    { en: 'Vietnamese ', tr: 'TIẾNG VIỆT' },
                                    { en: 'Azeri', tr: 'AZƏRBAYCAN' },
                                    { en: 'French', tr: 'AFRIQUE' },
                                    { en: 'Japanese', tr: '日本語' },
                                    { en: 'Marathi ', tr: ' मराठी' },
                                    { en: 'Portuguese', tr: 'BRASIL' },
                                    { en: 'Spanish', tr: 'MUNDO' },
                                    { en: 'Ukrainian', tr: 'УКРАЇНСЬКA' },
                                    { en: 'Bangla', tr: ' বাংলা' },
                                    { en: 'Hausa', tr: ' HAUSA ' },
                                    { en: 'Kinyarwanda', tr: ' GAHUZA ' },
                                    { en: 'Nepali', tr: ' नेपाली ' },
                                    { en: 'Pashto', tr: ' پښتو ' },
                                    { en: 'Urdu', tr: ' اردو ' },

                                ].map(ele => {
                                    return <FlexRow className='gap-1 text-sm w-fit cursor-pointer'>
                                        <p className='hover:underline'>{ele.en}</p>
                                        <p className='text-[#1d6293]'>{ele.tr}</p>
                                    </FlexRow>
                                })
                            }
                        </div>
                    </FlexCol>
                </div> */}

            </FlexCol>


        </Wrapper>
    )
}

export default Home