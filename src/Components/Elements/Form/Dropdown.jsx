import React from 'react'
import Error from './Error'

const Dropdown = ({ label, error, onChange, value, type, option, name }) => {
  return (
    <div className="undefined flex flex-col gap-2 relative">
      <div className="text-sm flex items-center gap-1">
        {label}
      </div>
      <div className={`border disabled:cursor-not-allowed rounded-md text-sm outline-none lg:px-4 px-2 py-[0.8rem] placeholder:text-[#A1A1A1] focus:border-yellow-500 ease-in transition-all focus:border-l-[0.375rem] ${error && '!border-red-500'}`}>
        <select type={type} value={value} onChange={onChange} name={name} className={`outline-none border-none w-full`}>
          {
            option.map((ele, i) => {
              return <option value={ele.value}>{ele.label}</option>
            })
          }
        </select>
      </div>
      {
        error && <Error />
      }
    </div>
  )
}

Dropdown.defaultProps = {
  option: [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' }
  ]
}

export default Dropdown