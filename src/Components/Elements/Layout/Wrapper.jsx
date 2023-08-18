import React from 'react'
import Header from '../../Header'

const Wrapper = ({ children, no_header }) => {
    return (
        <div>
            {
                !no_header && <Header />
            }
            {children}
        </div>
    )
}

export default Wrapper