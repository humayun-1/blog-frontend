import React from 'react'

const SimpleCardShimmer = () => {
    return (
        <div class="bg-white shadow-md rounded-md p-4 w-72">
            <div class="animate-pulse">
                <div class="h-40 bg-gray-300 rounded-md mb-4"></div>
                <div class="h-4 bg-gray-200 rounded w-2/3"></div>
                <div class="h-4 bg-gray-200 rounded w-1/2 my-2"></div>
                <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
        </div>
    )
}

export default SimpleCardShimmer