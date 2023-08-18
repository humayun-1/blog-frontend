import React from 'react'
import FlexCol from '../Layout/FlexCol'
import TypeSticker from './TypeSticker'
import Svgs from '../Svgs'

const VideoCard = ({ type, no_play }) => {
    return (
        <div className={''}>
            <div className='h-[15rem] overflow-hidden relative'>
                <img src={`https://source.unsplash.com/random?${type}`} className=' absolute inset-0 object-cover object-center h-full w-full brightness-75 hover:scale-[1.12] hover:rotate-3 hover:brightness-100 transition-all z-[1]' alt="" />
                {!no_play &&
                    <div className="absolute z-[2] left-0 bottom-0 h-[3.5rem] w-[3.5rem] flex items-center justify-center bg-black">
                        <Svgs.Play />
                    </div>
                }
            </div>
            <div className='px-4 py-2 bg-white'>
                <h1 className='text-xl text-[#444444]'>Arrests after mob burns churches in Pakistan burns.</h1>
            </div>
        </div>
    )
}
VideoCard.defaultProps = {
    type: 'Bomb',
    no_play:false
}
export default VideoCard