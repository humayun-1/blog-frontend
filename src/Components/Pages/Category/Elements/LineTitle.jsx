import React from 'react'
import FlexRow from '../../../Elements/Layout/FlexRow'

const LineTitle = ({ title }) => {
    return (
        <FlexRow>
            <h1 className='text-[1.6rem]'>{title}</h1>
            <div className='h-[1px] bg-[#7B756F] flex-1'></div>
        </FlexRow>
    )
}

export default LineTitle