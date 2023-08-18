import React from 'react'

const FlexCol = ({ className, children }) => {
    const fn = () => {
        if (className) {
            if (className.includes('gap-')) {
                return
            } else {
                return 'gap-2'
            }
        } else {
            return 'gap-2'
        }
    }
    return (
        <div className={`flex flex-col ${fn()} ${className}`}>{children}</div>
    )
}

export default FlexCol