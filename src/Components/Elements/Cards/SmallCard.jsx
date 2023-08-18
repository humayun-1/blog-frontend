import React from 'react'
import FlexCol from '../Layout/FlexCol'
import TypeSticker from './TypeSticker'

const SmallCard = () => {
    return (
        <div className='h-full w-full min-h-[12.5rem] relative overflow-hidden cursor-pointer group'>
            <img src="https://source.unsplash.com/random?night" className='object-cover object-center h-full w-full brightness-75 group-hover:scale-[1.12] group-hover:rotate-3 group-hover:brightness-100 transition-all absolute inset-0 z-[1]' alt="" />
            <div className='absolute bottom-0 left-0 right-0 p-4 bg-overlay z-[2]'>
                <FlexCol className={'text-white'}>
                    <h5 className='text-[1rem] font-semibold'>Boat tragedy: 'My brother died for a dream we all have'</h5>
                    <TypeSticker color={"bg-red-500"} text={'Africa'} />
                </FlexCol>
            </div>
        </div>
    )
}

export default SmallCard