import React, { useState } from 'react'
import FlexCol from '../Layout/FlexCol'
import Svgs from '../Svgs'

const VideoCard = ({ no_play, data }) => {
    const [showPopup, setShowPopup] = useState(false);
    const videoId = data?.url?.split('v=')[1];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    return (<>
        {showPopup && (
            <div className="fixed top-0 left-0 z-[10000] w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <FlexCol className="bg-white p-4 rounded shadow-lg w-3/4 relative h-[80vh]">
                    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-[222] bg-red-500 text-white cursor-pointer rounded-full h-[2rem] w-[2rem] flex items-center justify-center hover:text-gray-800" onClick={() => setShowPopup(false)}>
                        <Svgs.X />
                    </span>
                    <h1 className='font-semibold text-2xl mb-2'>{data?.title}</h1>
                    <div className='flex-1'>
                        <iframe title="YouTube Video" width="100%" height="100%" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen />
                    </div>
                </FlexCol>
            </div>
        )}
        <div className={''} onClick={() => {
            if (no_play) {
                window.open(`${data?.url}`, '_blank');
            } else {
                setShowPopup(true)
            }
        }}>
            <div className='h-[15rem] overflow-hidden relative'>
                <img src={no_play ? data?.image : thumbnailUrl} className=' absolute inset-0 object-cover object-center h-full w-full brightness-75 hover:scale-[1.12] hover:rotate-3 hover:brightness-100 transition-all z-[1]' alt="" />
                {!no_play &&
                    <div className="absolute z-[2] left-0 bottom-0 h-[3.5rem] w-[3.5rem] flex items-center justify-center bg-black">
                        <Svgs.Play />
                    </div>
                }
            </div>
            <div className='px-4 py-2 bg-white'>
                <h1 className='text-xl text-[#444444]'>{data?.title}</h1>
            </div>
        </div>
    </>
    )
}
VideoCard.defaultProps = {
    no_play: false,
    data: {
        title: 'The nature of kazakhstan | Natural wonders of kazakhstan',
        url: "https://www.youtube.com/watch?v=-aoqapsL-s0"
    }
}
export default VideoCard