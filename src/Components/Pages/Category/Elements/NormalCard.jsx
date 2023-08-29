import React from 'react'
import FlexCol from '../../../Elements/Layout/FlexCol'
import FlexRow from '../../../Elements/Layout/FlexRow'
import Svgs from '../../../Elements/Svgs'
import { useNavigate } from 'react-router-dom'

const NormalCard = ({ size, noImage, noDescripton, noFooter, className, headingClass, data }) => {
    const naviagte = useNavigate();
    return (
        <FlexCol className={`gap-1 cursor-pointer ${className}`} onClick={() => {
            if (data?.url) {
                window.open(`${data?.url}`, '_blank');
            }
        }}>
            {
                !noImage && <div className={`${size ? size : "h-[8rem]"} overflow-hidden`}>
                    <img src={data?.image} className="bg-gray-100 object-cover object-center h-full w-full brightness-75 hover:scale-[1.12] hover:rotate-3 hover:brightness-100 transition-all" />
                </div>
            }

            <h1 className={`${headingClass} text-[#222222] line-clamp-3`}>{data?.title}</h1>
            {
                !noDescripton && <div className='text-[#5a5a5a] text-sm line-clamp-4' dangerouslySetInnerHTML={{ __html: data?.description }}>
                </div>
            }
            {
                !noFooter && <FlexRow className={"text-xs text-[#5a5a5a]"}>
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
            }

        </FlexCol>
    )
}

NormalCard.defaultProps = {
    data: {
        title: 'Lorem ipsum dolor sit amet, co.',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ipsam et dolores!",
        image: "https://source.unsplash.com/random?mountains",
        id: false
    }
}

export default NormalCard