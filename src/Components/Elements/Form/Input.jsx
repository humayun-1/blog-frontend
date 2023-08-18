import React from 'react'
import Error from './Error'

const Input = ({ label, placeholder, value, onChange, error, type, name }) => {
  return (
    <div className="undefined flex flex-col gap-2 relative">
      <div className="text-sm flex items-center gap-1">
        {label}
      </div>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} name={name} className={`border disabled:cursor-not-allowed rounded-md text-sm outline-none lg:px-4 px-2 py-[0.8rem] placeholder:text-[#A1A1A1] focus:border-yellow-500 ease-in transition-all focus:border-l-[0.375rem] ${error && '!border-red-500'}`} />
      {
        error && <Error /> 
      }
    </div>
  )
}

export default Input