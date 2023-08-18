import React, { useState } from 'react'
import Svgs from '../Svgs'
import Error from './Error'

const Password = ({ label, placeholder, value, onChange, error, name }) => {
    const [Show, setShow] = useState(false)
    return (
        <div className="flex flex-col gap-2 relative">
            <p className="text-sm">{label}</p>
            <div className="flex flex-col gap-2 relative">
                <input value={value} type={Show ? 'text' : 'password'} name={name} onChange={onChange} className={`border rounded-md text-sm outline-none lg:px-4 px-2 py-[0.8rem] placeholder:text-[#A1A1A1] text-primary focus:border-yellow-500 ease-in transition-all focus:border-l-[7px] ${error && '!border-red-500'}`} placeholder={placeholder} />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => {
                    setShow(!Show)
                }}>
                    <Svgs.Eye />
                </div>
            </div>
            {
        error && <Error />
      }
        </div>
    )
}

export default Password