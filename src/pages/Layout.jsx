import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/Common/NavBar'
const Layout = () => {
  return (
    <div className='relative w-full h-full'>
        <Outlet/>
        <NavBar/>
    </div>
  )
}

export default Layout