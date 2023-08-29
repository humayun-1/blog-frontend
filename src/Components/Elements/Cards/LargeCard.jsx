import React from 'react'
import FlexCol from '../Layout/FlexCol'
import TypeSticker from './TypeSticker'

const LargeCard = ({ data }) => {
    return (
        <div onClick={() => {
            if (data?.url) {
                window.open(`${data?.url}`, '_blank');
            }
        }} className='h-full w-full relative overflow-hidden cursor-pointer group'>
            <img src={data?.image} className='object-cover object-center h-full w-full brightness-75 group-hover:scale-[1.12] group-hover:rotate-3 group-hover:brightness-100 transition-all absolute inset-0 z-[1]' alt="" />
            <div className='absolute bottom-0 left-0 right-0 p-4 bg-overlay z-[2]'>
                <FlexCol className={'text-white'}>
                    <h5 className='text-[2rem] font-semibold'>{data?.title}</h5>
                    <div className='text-[#d3d3d3] line-clamp-2'>
                        <div className='' dangerouslySetInnerHTML={{ __html: data?.description }}></div>
                    </div>
                    <TypeSticker color={"bg-red-500"} text={data?.category} />
                </FlexCol>
            </div>
        </div>
    )
}

export default LargeCard