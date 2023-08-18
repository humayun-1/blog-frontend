import React, { useEffect, useState } from 'react'
import Svgs from './Elements/Svgs'
import FlexRow from './Elements/Layout/FlexRow'
import HeaderJson from './Data/HeaderData'

const Header = () => {

  const [TopBar, setTopBar] = useState([]);
  const [BottomBar, setBottomBar] = useState([]);
  const [Expand, setExpand] = useState(false);

  const size = {
    '650': 4,
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
    console.log(arrLength);
    setTopBar(HeaderJson.slice(0, arrLength));
    setBottomBar(HeaderJson.slice(arrLength, HeaderJson.length));
  }

  useEffect(() => {
    renderHeader()
    window.addEventListener('resize', renderHeader)
  }, [])



  return (
    <div className='bg-black text-white'>
      <div className='container py-3'>
        <FlexRow className='justify-between gap-4'>
          <FlexRow className='gap-5'>
            <div>
              <Svgs.Logo />
            </div>
            <FlexRow>
              <Svgs.User size={'1.5rem'} />
              <p className='whitespace-nowrap text-[0.84rem]'>Sign in</p>
            </FlexRow>
          </FlexRow>
          <FlexRow className={'gap-10 border-l border-[#262626] pl-5'}>
            {
              TopBar.map((item, index) => {
                return <div className={`cursor-pointer hover_bottom`} style={{ color: item.color }}>
                  <p className='font-semibold text-[0.84rem] text-white'>{item.name}</p>
                </div>
              })
            }
            <div className='cursor-pointer' onClick={() => {
              setExpand(!Expand)
            }}>
              <Svgs.ShowMore />
            </div>
            <FlexRow className='bg-[#202224] px-3 py-2 cursor-pointer hover:bg-[#3a3c3e] transition-all text-[0.84rem] w-[14rem]'>
              <div>
                <Svgs.Search />
              </div>
              <div>
                <p>Search BBC</p>
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
  )
}

export default Header