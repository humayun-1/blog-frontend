import React from 'react'

const SimpleCardShimmer = () => {
    return (
        <div class="rounded-md p-4">
            <div class="animate-pulse">
                <div class="h-[14rem] bg-gray-300 mb-4"></div>
                <div class="h-4 bg-gray-200 rounded w-2/3"></div>
                <div class="h-4 bg-gray-200 rounded w-1/2 my-2"></div>
                <div class="h-4 bg-gray-200 rounded w-[30%]"></div>
            </div>
        </div>
    )
}

export default SimpleCardShimmer