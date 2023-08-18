import React from 'react'
import FlexCol from '../Layout/FlexCol'
import TypeSticker from './TypeSticker'

const SimpleCard = ({type}) => {
    return (
        <FlexCol>
            <div className='h-[18rem] overflow-hidden'>
                <img src={`https://source.unsplash.com/random?${type}`} className='object-cover object-center h-full w-full brightness-75 hover:scale-[1.12] hover:rotate-3 hover:brightness-100 transition-all' alt="" />
            </div>
            <h1 className='text-xl'>Arrests after mob burns churches in Pakistan</h1>
            <p className='text-sm'>Public gatherings in the area are also banned for seven days after violence in the city of Jaranwala.</p>
            <TypeSticker color={'bg-red-500'} text={'Asia'} textClass={'!text-[##767676]'} />
        </FlexCol>
    )
}
SimpleCard.defaultProps = {
    type:'Bomb'
}
export default SimpleCard