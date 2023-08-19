import React, { useEffect, useState } from 'react'
import Preloader from './Preloader';
import { useNavigate } from 'react-router-dom';

const DashboardWrapper = ({ children, active }) => {
    const [Render, setRender] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setTimeout(() => {
                setRender(true);
            }, 1000);
        }else{
            navigate('/')
        }
    }, [])

    return (
        <>
            {
                Render ? <div class="nstyle-container">
                    <div class="grid grid-cols-11">
                        <div
                            class="col-span-2 border-r lg:block h-[100vh] lg:sticky fixed top-0 bg-white responsive_sidebar hidden"
                        >
                            <div
                                class="xl:py-[2.5rem] py-[1rem] flex flex-col gap-[2rem] h-[100vh] overflow-auto"
                            >
                                <div class="xl:px-[2rem] px-[1rem] flex items-center gap-4">
                                    <div class="flex items-center gap-3 cursor-pointer flex-wrap">
                                        <div>
                                        <img src={`${process.env.PUBLIC_URL}/Assets/images/logo.png`} className="h-[3rem]" />
                                        </div>
                                    </div>
                                    <div class="cursor-pointer lg:hidden block">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="22"
                                            height="22"
                                            stroke="#878C93"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="css-i6dzq1"
                                        >
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    class="xl:px-[2rem] px-[1rem] flex flex-col gap-2 overflow-y-auto scroll-hidden-lg flex-1 lg:mb-0 mb-[4rem] lg:pb-0 pb-[1rem]"
                                >
                                    <div onClick={()=>{
                                        navigate('/admin/dashboard')
                                    }} class={`px-3 py-4 hover:bg-gray-200 transition-all cursor-pointer rounded-lg flex items-center gap-3 ${active == 'dashboard' && "!bg-yellow-500"}`}
                                    >
                                        <svg
                                            width="1.31rem"
                                            height="1.31rem"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.3333 7.1013V3.31797C18.3333 2.14297 17.8 1.66797 16.475 1.66797H13.1083C11.7833 1.66797 11.25 2.14297 11.25 3.31797V7.09297C11.25 8.2763 11.7833 8.74297 13.1083 8.74297H16.475C17.8 8.7513 18.3333 8.2763 18.3333 7.1013Z"
                                                stroke="#292D32"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z"
                                                stroke="#292D32"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M8.74935 7.1013V3.31797C8.74935 2.14297 8.21602 1.66797 6.89102 1.66797H3.52435C2.19935 1.66797 1.66602 2.14297 1.66602 3.31797V7.09297C1.66602 8.2763 2.19935 8.74297 3.52435 8.74297H6.89102C8.21602 8.7513 8.74935 8.2763 8.74935 7.1013Z"
                                                stroke="#292D32"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M8.74935 16.475V13.1083C8.74935 11.7833 8.21602 11.25 6.89102 11.25H3.52435C2.19935 11.25 1.66602 11.7833 1.66602 13.1083V16.475C1.66602 17.8 2.19935 18.3333 3.52435 18.3333H6.89102C8.21602 18.3333 8.74935 17.8 8.74935 16.475Z"
                                                stroke="#292D32"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <p class="text-sm">Dashboard</p>
                                    </div>


                                    <div onClick={()=>{
                                        navigate('/admin/blogs')
                                    }} class={`px-3 py-4 hover:bg-gray-200 transition-all cursor-pointer rounded-lg flex items-center gap-3 ${active == 'blog' && "!bg-yellow-500"}`}
                                    >
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                        <p class="text-sm">Blogs</p>
                                    </div>

                                    <div onClick={()=>{
                                        localStorage.removeItem("token")
                                        navigate('/')
                                    }} class={`px-3 py-4 hover:bg-gray-200 transition-all cursor-pointer rounded-lg flex items-center gap-3`}>
                                        <svg
                                            width="1.313rem"
                                            height="21"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_3320_26546)">
                                                <path
                                                    d="M11.4274 9.83146C11.0263 9.83146 10.7021 10.1565 10.7021 10.5568V13.4584C10.7021 13.858 10.3771 14.1837 9.97665 14.1837H7.80054V3.30313C7.80054 2.68366 7.40593 2.1302 6.81263 1.9242L6.59786 1.85234H9.97665C10.3771 1.85234 10.7021 2.17801 10.7021 2.5778V4.75391C10.7021 5.15423 11.0263 5.47924 11.4274 5.47924C11.8285 5.47924 12.1528 5.15423 12.1528 4.75391V2.5778C12.1528 1.37804 11.1764 0.401688 9.97665 0.401688H2.17896C2.15133 0.401688 2.12822 0.41404 2.10139 0.417626C2.06646 0.414704 2.03312 0.401688 1.99766 0.401688C1.19756 0.401688 0.546875 1.05224 0.546875 1.85234V14.909C0.546875 15.5285 0.941481 16.0819 1.53479 16.2879L5.90016 17.7431C6.04812 17.7888 6.19528 17.8106 6.34988 17.8106C7.14999 17.8106 7.80054 17.1599 7.80054 16.3598V15.6345H9.97665C11.1764 15.6345 12.1528 14.6581 12.1528 13.4584V10.5568C12.1528 10.1565 11.8285 9.83146 11.4274 9.83146Z"
                                                    fill="#101928"
                                                ></path>
                                                <path
                                                    d="M17.7432 7.14252L14.8416 4.24108C14.6343 4.03362 14.3223 3.97119 14.0511 4.08356C13.7805 4.19606 13.6035 4.46076 13.6035 4.7539V6.93001H10.702C10.3016 6.93001 9.97656 7.25488 9.97656 7.65534C9.97656 8.05579 10.3016 8.38066 10.702 8.38066H13.6035V10.5568C13.6035 10.8499 13.7805 11.1146 14.0511 11.2271C14.3223 11.3395 14.6343 11.2771 14.8416 11.0697L17.7432 8.16815C18.0267 7.88458 18.0267 7.42609 17.7432 7.14252Z"
                                                    fill="#101928"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3320_26546">
                                                    <rect
                                                        width="17.4091"
                                                        height="17.4091"
                                                        fill="white"
                                                        transform="translate(0.546875 0.401443)"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p class="text-sm">Logout</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div
                            class="fixed inset-0 bg-black/20 z-[1] overlay_responsive backdrop-blur-[2px] hidden"
                        ></div>
                        <div class="col-span-11 lg:col-span-9 overflow-hidden px-0 min-h-[100vh]">
                            <div
                                class="lg:px-[2rem] lg:py-[2.5rem] py-[1.3rem] px-[1rem] no_padding_parent h-full bounce-in-right"
                            >
                                {children}
                            </div>
                        </div>
                    </div>
                </div> : <div className='h-screen w-full flex items-center justify-center'>
                    <Preloader />
                </div>
            }

        </>
    )
}

export default DashboardWrapper