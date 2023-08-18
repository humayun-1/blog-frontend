import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './helper'
import Home from '../Components/Pages/Home/Home'

const MainRouter = () => {
    return (
        <Routes>

            {
                publicRoutes.map(({ path, element, index }) => {
                   return <Route path={path} element={element} key={index} />
                })
            }
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default MainRouter