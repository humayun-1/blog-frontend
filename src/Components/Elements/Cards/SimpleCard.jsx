import React from 'react'
import FlexCol from '../Layout/FlexCol'
import TypeSticker from './TypeSticker'
import DynamicHTMLComponent from '../DynamicHTMLComponent'
import { useNavigate } from 'react-router-dom'



const SimpleCard = ({ type, className, parentClass, image, description, title, id }) => {
    const navigate = useNavigate();
    return (
        <FlexCol onClick={() => {
            if (id) {
                window.open(`/news?news_id=${id}`, '_blank');
            }
        }} className={`${parentClass} cursor-pointer`}>
            <div className={`h-[18rem] overflow-hidden ${className}`}>
                <img src={image ? image : `https://source.unsplash.com/random?${type}`} className='bg-gray-100 object-cover object-center h-full w-full brightness-75 hover:scale-[1.12] hover:rotate-3 hover:brightness-100 transition-all' alt="" />
            </div>
            <h1 className='text-xl'>{title ? title : "Arrests after mob burns churches in Pakistan"}</h1>
            <div className='text-sm line-clamp-1'>{description ? <DynamicHTMLComponent htmlString={description} /> : "Public gatherings in the area are also banned for seven days after violence in the city of Jaranwala."}</div>
            <TypeSticker color={'bg-red-500'} text={'Asia'} textClass={'!text-[##767676]'} />
        </FlexCol>
    )
}
SimpleCard.defaultProps = {
    type: 'Bomb'
}
export default SimpleCard