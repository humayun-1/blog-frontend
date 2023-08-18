import React from 'react'
import Wrapper from '../../Elements/Layout/Wrapper'
import FlexCol from '../../Elements/Layout/FlexCol'
import LargeCard from '../../Elements/Cards/LargeCard'
import SmallCard from '../../Elements/Cards/SmallCard'
import TypeSticker from '../../Elements/Cards/TypeSticker'
import SimpleCard from '../../Elements/Cards/SimpleCard'
import FlexRow from '../../Elements/Layout/FlexRow'

const Home = () => {
    return (
        <Wrapper>
            <FlexCol className='gap-10 py-[2rem]'>
                <FlexCol className={'container gap-3'}>
                    <h1 className='text-[#4a4a4a] font-semibold text-xl'>Welcome to BBC.com</h1>
                    <div className='grid lg:grid-cols-2 h-[25rem] gap-3'>
                        <LargeCard />
                        <div className='grid md:grid-cols-2 gap-3'>
                            <SmallCard />
                            <SmallCard />
                            <SmallCard />
                            <SmallCard />
                        </div>
                    </div>
                </FlexCol>
                <FlexCol className={'container gap-3'}>
                    <TypeSticker color={'bg-red-500'} size={'lg'} text={'News'} textClass={'!text-[#000]'} />
                    <div className='grid xl:grid-cols-3 sm:grid-cols-2 gap-4'>
                        {
                            [0, 0, 0].map(ele => {
                                return <SimpleCard />
                            })
                        }
                    </div>
                </FlexCol>
                <FlexCol className={'container gap-3'}>
                    <TypeSticker color={'bg-yellow-500'} size={'lg'} text={'Sport'} textClass={'!text-[#000]'} />
                    <div className='grid xl:grid-cols-3 sm:grid-cols-2 gap-4'>
                        {
                            [0, 0, 0].map(ele => {
                                return <SimpleCard type={'car'} />
                            })
                        }
                    </div>
                </FlexCol>


                <div className='reel_bg'>
                    <FlexCol className='container py-[2rem]'>
                        <FlexRow className='justify-between text-white'>
                            <div>
                                <h1 className='text-[3rem]'>Reel</h1>
                                <p>The most amazing videos from the BBC</p>
                            </div>
                        </FlexRow>
                    </FlexCol>
                </div>


            </FlexCol>
        </Wrapper>
    )
}

export default Home