import React from 'react'
import FlexCol from '../Layout/FlexCol'
import TypeSticker from './TypeSticker'
import Svgs from '../Svgs'

const AdminCard = ({ description, title, image, onClick, className, category, delete_ }) => {
    return (<div className='border p-2 rounded-md transition-all hover:shadow-sm relative h-fit'>
        <div className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 overflow-hidden'>
            <div onClick={delete_} className='rounded-full cursor-pointer overflow-hidden h-[1.6rem] w-[1.6rem] flex items-center justify-center bg-red-500' title='Delete'>
                <div className=''>
                    <Svgs.Close />
                </div>
            </div>
        </div>
        <FlexCol onClick={onClick} className={`cursor-pointer`}>
            <div className={`h-[12rem] relative overflow-hidden group ${className}`}>
                <img src={image ? image : `https://placehold.co/600x400?text=dummy`} className='absolute z-[1] inset-0 bg-gray-100 object-cover object-center h-full w-full transition-all hover:brightness-75 brightness-100' alt="" />
                <div className='absolute inset-0 z-[2] hidden group-hover:block'>
                    <div className='flex items-center justify-center absolute inset-0 z-[2] transition-all hover:bg-black/30'></div>
                    <div className='absolute top-1/2 left-1/2 z-[3] -translate-x-1/2'>
                        <Svgs.Edit />
                    </div>
                </div>
            </div>
            <h1 className='text-lg line-clamp-2'>{title ? title : "Arrests after mob burns churches in Pakistan"}</h1>
            <div className='text-xs line-clamp-1'>{description ? <div dangerouslySetInnerHTML={{ __html: description }}></div> : "Public gatherings in the area are also banned for seven days after violence in the city of Jaranwala."}</div>
            <TypeSticker color={'bg-red-500'} text={category ? category : 'Sports'} textClass={'!text-[##767676]'} />
        </FlexCol>
    </div>
    )
}

export default AdminCard