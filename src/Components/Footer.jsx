import React from 'react'
import FlexCol from './Elements/Layout/FlexCol'
import FlexRow from './Elements/Layout/FlexRow'

const Footer = () => {
    const date = new Date();
    return (
        <div className='bg-[#4c4c4c]'>
            <FlexCol className={'container py-[1rem] gap-3 text-white'}>
                {/* <h1 className='text-[1.4rem] font-semibold'>Explore the Kazakhstan Review</h1> */}
                {/* <div className='border-b py-4'>
                    <FlexRow className={'w-full justify-between flex-wrap'}>
                        <p className='hover:underline cursor-pointer text-sm'>Home</p>
                        <div className='h-[2ch] border border-white'></div>
                        <p className='hover:underline cursor-pointer text-sm'>News</p>
                        <div className='h-[2ch] border border-white'></div>
                        <p className='hover:underline cursor-pointer text-sm'>Sport</p>
                        <div className='h-[2ch] border border-white'></div>
                        <p className='hover:underline cursor-pointer text-sm'>Reel</p>
                        <div className='h-[2ch] border border-white'></div>
                        <p className='hover:underline cursor-pointer text-sm'>Worklife</p>
                        <div className='h-[2ch] border border-white'></div>
                        <p className='hover:underline cursor-pointer text-sm'>Travel</p>
                        <div className='h-[2ch] border border-white'></div>
                        <p className='hover:underline cursor-pointer text-sm'>News</p>
                        <div className='h-[2ch] border border-white'></div>
                        <p className='hover:underline cursor-pointer text-sm'>Sport</p>
                        <div className='h-[2ch] border border-white'></div>
                        <p className='hover:underline cursor-pointer text-sm'>Reel</p>
                    </FlexRow>
                </div>
                <FlexRow className={'justify-between flex-wrap'}>
                    <p className='hover:underline cursor-pointer text-sm'>Terms of Use</p>
                    <p className='hover:underline cursor-pointer text-sm'>About the BBC</p>
                    <p className='hover:underline cursor-pointer text-sm'>Privacy Policy</p>
                    <p className='hover:underline cursor-pointer text-sm'>Cookies</p>
                    <p className='hover:underline cursor-pointer text-sm'>Accessibility Help</p>
                    <p className='hover:underline cursor-pointer text-sm'>Parental Guidance</p>
                    <p className='hover:underline cursor-pointer text-sm'>Contact the KR</p>
                    <p className='hover:underline cursor-pointer text-sm'>Emails for you</p>
                    <p className='hover:underline cursor-pointer text-sm'>Do not share or sell my info.</p>
                </FlexRow> */}
                <p className='text-xs text-center'>Copyright © {date.getFullYear()} Kazakhstan Review. The Kazakhstan Review is not responsible for the content of external sites. Read about our approach to external linking.</p>
            </FlexCol>
        </div>
    )
}

export default Footer