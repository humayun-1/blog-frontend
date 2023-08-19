import React, { useEffect, useState } from 'react'
import Svgs from './Elements/Svgs'
import FlexRow from './Elements/Layout/FlexRow'
import HeaderJson from './Data/HeaderData'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const [TopBar, setTopBar] = useState([]);
  const [BottomBar, setBottomBar] = useState([]);
  const [Expand, setExpand] = useState(false);

  const size = {
    '650': 3,
    '720': 5,
    '800': 6,
    '900': 7,
    '1280': 8,
  }

  const getSizeValue = (windowWidth, sizeObject) => {
    const sortedKeys = Object.keys(sizeObject)
      .map(Number)
      .sort((a, b) => b - a); // Sort keys in descending order

    for (const key of sortedKeys) {
      if (windowWidth >= key) {
        return sizeObject[key];
      }
    }

    // Default value if none of the keys match
    return 3; // For example, return 3 if window width is less than 650
  };


  const renderHeader = () => {
    let width = window.innerWidth;
    let arrLength = getSizeValue(width, size);
    setTopBar(HeaderJson.slice(0, arrLength));
    setBottomBar(HeaderJson.slice(arrLength, HeaderJson.length));
  }

  useEffect(() => {
    renderHeader()
    window.addEventListener('resize', renderHeader)
  }, [])

  const navigate = useNavigate();

  return (<>
    <marquee behavior="" direction="" className='text-sm py-1'>
      <p className='leading-[1]'><span className='pl-[2rem]'>Letby killed the babies at a Chester hospital in 2015 and 2016 - she is the most prolific killer of babies in the UK in modern times.</span> <span className='pl-[2rem]'>
        Shocking video of smoke-filled routes are shared online as deadlines to evacuate the Northwest Territories looms.</span> <span className='pl-[2rem]'>Letby killed the babies at a Chester hospital in 2015 and 2016 - she is the most prolific killer of babies in the UK in modern times.</span></p>
    </marquee>
    <div className='bg-black text-white'>
      <div className='container py-3'>
        <FlexRow className='justify-between gap-4'>
          <div>
            <FlexRow className='gap-5'>
              <div className='w-[12rem] sm:block hidden'>
                {/* <Svgs.Logo /> */}
                <img src={`${process.env.PUBLIC_URL}/Assets/images/logo.png`} className="h-[3rem] w-full object-contain" />
              </div>
              <FlexRow className={'cursor-pointer'} onClick={() => {
                navigate('/admin')
              }}>
                <Svgs.User size={'1.5rem'} />
                <p className='whitespace-nowrap text-[0.84rem]'>Sign in</p>
              </FlexRow>
            </FlexRow>
          </div>
          <FlexRow className={'gap-10 border-l border-[#262626] pl-5'}>
            {
              TopBar.map((item, index) => {
                return <div onClick={() => {
                  navigate(item.url)
                }} className={`cursor-pointer hover_bottom`} style={{ color: item.color }}>
                  <p className='font-semibold text-[0.84rem] text-white'>{item.name}</p>
                </div>
              })
            }
            <div className='cursor-pointer' onClick={() => {
              setExpand(!Expand)
            }}>
              <Svgs.ShowMore />
            </div>
            <FlexRow className='bg-[#202224] px-3 py-2 cursor-pointer hover:bg-[#3a3c3e] transition-all text-[0.84rem] md:w-[14rem] w-fit'>
              <div>
                <Svgs.Search />
              </div>
              <div className='sm:block hidden'>
                <p>Search Kazakhstan Review</p>
              </div>
            </FlexRow>
          </FlexRow>
        </FlexRow>
      </div>
      {
        <>
          <div className={`border-t transition-all container border-[#262626] ${Expand ? 'h-[3.5rem]' : 'h-0'} overflow-hidden`}>
            <FlexRow className='gap-4 justify-between py-3'>
              <FlexRow className={'gap-5'}>
                {
                  BottomBar.map((item, index) => {
                    return <div className={`cursor-pointer hover_bottom`} style={{ color: item.color }}>
                      <p className='font-semibold text-[0.84rem] text-white'>{item.name}</p>
                    </div>
                  })
                }
              </FlexRow>
              <div className='cursor-pointer' onClick={() => {
                setExpand(false)
              }}>
                <Svgs.Close />
              </div>
            </FlexRow>
          </div>
        </>
      }

    </div>
  </>
  )
}

export default Header