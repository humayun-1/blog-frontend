import React from 'react'
import FlexCol from '../../../Elements/Layout/FlexCol'

const ImageCard = ({ color, data }) => {
    return (
        <div className='h-full w-full relative overflow-hidden cursor-pointer group'>
            <img src={data?.image} className='object-cover object-center h-full w-full brightness-75 group-hover:scale-[1.12] group-hover:rotate-3 group-hover:brightness-100 transition-all absolute inset-0 z-[1]' alt="" />
            <div className='absolute bottom-0 left-0 right-0 p-4 bg-overlay z-[2]'>
                <p className='text-[1.2rem] font-semibold text-white'>{data?.title}</p>
                <div className='w-[7ch] mt-2 h-[3px]' style={{
                    backgroundColor: color ? color : "rgb(235, 0, 0)"
                }}></div>
            </div>
        </div>
    )
}

ImageCard.defaultProps = {
    data: {
        title: 'Lorem ipsum dolor sit amet, co.',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsam et dolores!",
        image: "https://source.unsplash.com/random?mountains",
        id: false
    }
}
export default ImageCard