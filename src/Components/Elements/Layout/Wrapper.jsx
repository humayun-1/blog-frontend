import React from 'react'
import Header from '../../Header'
import Footer from '../../Footer'

const Wrapper = ({ children, no_header }) => {
    return (
        <div>
            {
                !no_header && <Header />
            }
            {children}

            <Footer />
        </div>
    )
}

export default Wrapper