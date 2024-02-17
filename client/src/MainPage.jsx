import React from 'react'
import './index.css'
import Header from './pages/components/Header'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default MainPage