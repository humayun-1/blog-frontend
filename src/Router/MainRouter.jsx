import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './helper'
import Home from '../Components/Pages/Home/Home'
import DynamicCategoryPage from '../Components/Pages/Category/DynamicCategoryPage'

const MainRouter = () => {
    return (
        <Routes>

            {
                publicRoutes.map(({ path, element, index }) => {
                    return <Route path={path} element={element} key={index} />
                })

            }
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" Component={DynamicCategoryPage} />
        </Routes>
    )
}

export default MainRouter