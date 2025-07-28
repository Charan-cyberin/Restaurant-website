import { Outlet } from 'react-router-dom'

import Header from '../components/Header.jsx'

import React from 'react'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      
    </>
  )
}

export default MainLayout