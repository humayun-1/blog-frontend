import React from 'react'
import Svgs from '../Svgs'

const NoRecordFound = () => {
    return (
        <div class="flex flex-col gap-3 justify-center text-center not_found">
            <div class="w-fit mx-auto">
                <Svgs.NotFound />
            </div>
            <p class="text-primary font-semibold text-lg">No Blogs Found!</p>
        </div>
    )
}

export default NoRecordFound