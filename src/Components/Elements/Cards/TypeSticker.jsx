import React from 'react'
import FlexRow from '../Layout/FlexRow'

const TypeSticker = ({ color, text, size, textClass }) => {
    return (
        <FlexRow className={'group w-fit'}>
            <div className={`${size != 'sm' ? 'h-[2ch] w-[3.5px]' : 'h-[1ch] w-[2px]'}  ${color} group-hover:rotate-90 transition-all`}></div>
            <p className={`${textClass ? textClass : 'hover:text-[#d3d3d3] text-[#d3d3d3]/70'} ${size != 'sm' ? 'text-xl font-semibold pl-2' : 'text-sm'} cursor-pointer hover:underline uppercase`}>{text}</p>
        </FlexRow>
    )
}
TypeSticker.defaultProps = {
    text: 'Africa',
    color: 'bg-red-600',
    size: 'sm'
}

export default TypeSticker