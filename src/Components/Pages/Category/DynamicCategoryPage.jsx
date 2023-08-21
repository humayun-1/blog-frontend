import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Wrapper from '../../Elements/Layout/Wrapper';
import FlexCol from '../../Elements/Layout/FlexCol';
import HeaderJson from '../../Data/HeaderData';
import FlexRow from '../../Elements/Layout/FlexRow';
import Svgs from '../../Elements/Svgs';
import NormalCard from './Elements/NormalCard';
import ImageCard from './Elements/ImageCard';
import LineTitle from './Elements/LineTitle';
import Categories from '../../Data/Categories';
import useFilteredData from '../../Firebase/useCategoryPost';
import DynamicHTMLComponent from '../../Elements/DynamicHTMLComponent';
import Preloader from '../../Elements/Layout/Preloader';
import NoRecordFound from '../../Elements/Cards/NoRecordFound';

const DynamicCategoryPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [current] = Categories.hasOwnProperty(category.toUpperCase()) ? (HeaderJson.filter(ele => ele.name?.toLowerCase() == category.toLowerCase())) : [HeaderJson[1]]
    const [BlogNews, setBlogNews] = useState([]);
    const NEWS = useFilteredData(Categories[(current.name).toUpperCase()]);
    const [FinalData, setFinalData] = useState([])
    const [Loaded, setLoaded] = useState(false)
    const [NoData, setNoData] = useState(false)

    useEffect(() => {
        setBlogNews(NEWS);
        if (NEWS.length == 0) {
            setNoData(true)
            setNoData(true)
        }
    }, [NEWS]);



    useEffect(() => {
        const sections = [
            {
                name: "header",
                length: 10
            },
            {
                name: "trending",
                length: 6
            },
            {
                name: "mustSee",
                length: 7
            },
            {
                name: "mostWatched",
                length: 5
            },
            {
                name: "fullStory",
                length: 7
            },
            {
                name: "mostRead",
                length: 10
            },
            {
                name: "around",
                length: 7
            },
        ];

        const dividedSections = {};

        sections.forEach(section => {
            if (BlogNews.length >= 1) {
                dividedSections[section.name] = [];
                for (let i = 0; i < section.length; i++) {
                    const dataIndex = i % BlogNews.length;
                    dividedSections[section.name].push(BlogNews[dataIndex]);
                }
                setLoaded(true)
            }
        });

        setFinalData(dividedSections)

    }, [BlogNews])




    return (
        <Wrapper>
            <div className='py-3' style={{ backgroundColor: current ? current?.color : "#b80000" }}>
                <div className='container'>
                    <h1 className='text-white text-[2rem]'>{current ? current.name : category}</h1>
                </div>
            </div>
            {
                Loaded ? <FlexCol className={'container gap-6 py-[1.2rem]'}>
                    <div className='grid lg:grid-cols-5 gap-5'>
                        <div className='lg:col-span-3 grid lg:grid-cols-3 gap-5 h-fit'>
                            <div className='col-span-3 grid lg:grid-cols-3 gap-5'>
                                <FlexCol>
                                    <h1 className='text-[1.2rem] hover:underline cursor-pointer'>{FinalData?.header[0]?.title}</h1>
                                    <div className='text-[#5a5a5a] text-sm line-clamp-4' dangerouslySetInnerHTML={{ __html: FinalData?.header[0]?.description }}></div>
                                    <FlexRow className={"text-xs text-[#5a5a5a]"}>
                                        <FlexRow className={'gap-1 border-r pr-2'}>
                                            <div>
                                                <Svgs.Time />
                                            </div>
                                            <div>
                                                1m
                                            </div>
                                        </FlexRow>
                                        <FlexRow className={'!gap-0 border-r pr-2'}>
                                            BBC Sport
                                        </FlexRow>
                                    </FlexRow>
                                </FlexCol>
                                <div className='col-span-2'>
                                    <div className='h-[14rem] overflow-hidden w-full'>
                                        <img src={FinalData?.header[0].image ? FinalData?.header[0].image : "https://source.unsplash.com/random?mountains"} className="bg-gray-100 object-cover object-center h-full w-full brightness-75 hover:scale-[1.12] hover:rotate-3 hover:brightness-100 transition-all" />
                                    </div>
                                </div>

                            </div>


                            <NormalCard data={FinalData?.header[1]} />
                            <ImageCard data={FinalData?.header[2]} />
                            <NormalCard data={FinalData?.header[3]} />
                        </div>
                        <div className='col-span-2'>
                            <div className='grid lg:grid-cols-2 gap-5'>
                                <NormalCard data={FinalData?.header[4]} size={"h-[10rem]"} />
                                <NormalCard data={FinalData?.header[5]} size={"h-[10rem]"} />

                                <NormalCard data={FinalData?.header[6]} noImage noDescripton />
                                <NormalCard data={FinalData?.header[7]} noImage noDescripton />
                                <NormalCard data={FinalData?.header[8]} noImage noDescripton />
                                <NormalCard data={FinalData?.header[9]} noImage noDescripton />
                            </div>
                        </div>
                    </div>
                    <FlexCol>
                        <LineTitle title="Trending" />
                        <div className='grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3'>
                            {
                                [0, 1, 2, 3, 4, 5].map(ele => {
                                    return <NormalCard data={FinalData?.trending[ele]} noFooter noDescripton />
                                })
                            }
                        </div>
                    </FlexCol>

                    <FlexCol className={'my-[2rem]'}>
                        <LineTitle title="Must see" />
                        <div className='grid lg:grid-cols-5 gap-5'>
                            <div className='col-span-2'>
                                <NormalCard data={FinalData?.mustSee[0]} headingClass="text-[1.4rem]" size={'h-[16rem]'} noFooter noDescripton />
                            </div>
                            <div className='col-span-3 grid lg:grid-cols-3 gap-3'>
                                {
                                    (FinalData?.mustSee.slice(1, 7)).map(ele => {
                                        return <NormalCard data={ele} noFooter noDescripton />
                                    })
                                }
                            </div>
                        </div>
                    </FlexCol>

                    <FlexCol className={'my-[2rem]'}>
                        <LineTitle title="Most watched" />
                        <div className='grid lg:grid-cols-5 gap-3'>
                            {
                                (FinalData?.mostWatched).map((ele, i) => {
                                    return <FlexRow className={'!items-start'}>
                                        <div className='h-fit'>
                                            <p className='text-[#b80000] text-[2rem] leading-[1]'>
                                                {i + 1}
                                            </p>
                                        </div>
                                        <div>
                                            <div className='line-clamp-3'>
                                                <Svgs.Triangle />
                                                <p className='inline ml-2 font-semibold'>{ele.title}</p>
                                            </div>
                                        </div>
                                    </FlexRow>
                                })
                            }
                        </div>
                    </FlexCol>



                    <FlexCol>
                        <LineTitle title="Full Story" />
                        <div className='grid lg:grid-cols-5 gap-5'>
                            <div className='col-span-2'>
                                <NormalCard data={FinalData?.fullStory[1]} headingClass="text-[1.4rem]" size={'h-[16rem]'} noFooter noDescripton />
                            </div>
                            <div className='col-span-3 grid lg:grid-cols-3 gap-3'>
                                {
                                    (FinalData?.fullStory.slice(1, 7)).map(ele => {
                                        return <NormalCard data={ele} noFooter noDescripton />
                                    })
                                }
                            </div>
                        </div>
                    </FlexCol>



                    <FlexCol className={'my-[2rem]'}>
                        <LineTitle title="Most Read" />
                        <div className='lg:grid-cols-2 grid gap-7 lg:w-[66%]'>
                            {
                                FinalData?.mostRead.map((ele, i) => {
                                    return <FlexRow className={'!items-start'}>
                                        <div className='h-fit'>
                                            <p className='text-[#b80000] text-[2.6rem] leading-[1]'>
                                                {i + 1}
                                            </p>
                                        </div>
                                        <div>
                                            <p className='font-semibold hover:underline hover:text-[#b80000] cursor-pointer transition-all line-clamp-3'>{ele.title} </p>
                                        </div>
                                    </FlexRow>
                                })
                            }
                        </div>
                    </FlexCol>


                    <FlexCol>
                        <LineTitle title="Around the BBC" />
                        <div className='grid lg:grid-cols-5 gap-5'>
                            <div className='col-span-2'>
                                <NormalCard data={FinalData?.around[1]} headingClass="text-[1.4rem]" size={'h-[16rem]'} noFooter noDescripton />

                            </div>
                            <div className='col-span-3 grid lg:grid-cols-3 gap-3'>
                                {
                                    (FinalData?.around.slice(1, 7)).map(ele => {
                                        return <NormalCard data={ele} noFooter noDescripton />

                                    })
                                }
                            </div>
                        </div>
                    </FlexCol>


                    <FlexCol>
                        <LineTitle title="Find us here" />
                        <div className='grid lg:grid-cols-5 gap-5'>
                            <div className='col-span-2'>
                                <FlexRow>
                                    <div className='transition-all hover:bg-[#1DA1F2] t-hover'>
                                        <Svgs.Twitter />
                                    </div>
                                    <div className='transition-all hover:bg-[#3D5A98] f-hover'>
                                        <Svgs.Facebook />
                                    </div>
                                    <div className='transition-all hover:bg-[#D93175] i-hover'>
                                        <Svgs.Instagram />
                                    </div>
                                </FlexRow>
                            </div>
                            <div className='col-span-3 grid lg:grid-cols-3 gap-3 border-l-2 border-[#5A5A5A] pl-6'>
                                <FlexCol>
                                    <FlexRow className={'!gap-0'}>
                                        <div>
                                            <Svgs.Mail />
                                        </div>
                                        <div className='border-l-2 border-[#5A5A5A] pl-3 ml-3'>
                                            <h1 className='text-[1.2rem]'>News <span className='font-semibold'>Daily</span></h1>
                                        </div>
                                    </FlexRow>
                                    <h1 className='text-xs font-semibold'>Get news from the BBC in your inbox each weekday morning</h1>
                                </FlexCol>
                                <FlexCol>
                                    <FlexRow className={'!gap-0'}>
                                        <div>
                                            <Svgs.Phone />
                                        </div>
                                        <div className='border-l-2 border-[#5A5A5A] pl-3 ml-3'>
                                            <h1 className='text-[1.2rem]'>News <span className='font-semibold'>App</span></h1>
                                        </div>
                                    </FlexRow>
                                    <h1 className='text-xs font-semibold'>Get news from the BBC in your inbox each weekday morning</h1>
                                </FlexCol>
                                <FlexCol>
                                    <h1 className='text-xs font-semibold'>Email us at haveyoursay@bbc.co.uk</h1>
                                    <h1 className='text-xs font-semibold'>Follow Have Your Say on Twitter</h1>
                                    <h1 className='text-xs font-semibold'>Why you can trust BBC News</h1>
                                </FlexCol>
                            </div>
                        </div>
                    </FlexCol>


                </FlexCol> : <div className='container h-[30rem] flex items-center justify-center'>
                    <FlexCol className={'items-center'}>
                        <Preloader />
                        <h1 className='text-sm'>Fetching Data ...</h1>
                    </FlexCol>
                </div>
            }

            {/* {
                NoData && <NoRecordFound />
            } */}


        </Wrapper >
    )
}

export default DynamicCategoryPage