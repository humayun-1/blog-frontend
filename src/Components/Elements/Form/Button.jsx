import React from 'react'

const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="py-2 bg-yellow-400 flex items-center gap-1 text-white text-sm px-4 !rounded-md">
            {children}
        </button>
    )
}

export default Button