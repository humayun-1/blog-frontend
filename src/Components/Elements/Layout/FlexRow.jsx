import React from 'react'

const FlexRow = ({ className, children,onClick }) => {
    const fn = ()=>{
        if(className){
            if(className.includes('gap-')){
                return
            }else{
                return 'gap-2'
            }
        }else{
            return 'gap-2'
        }
    }
    return (
        <div onClick={onClick} className={`flex items-center ${fn()} ${className}`}>{children}</div>
    )
}

export default FlexRow