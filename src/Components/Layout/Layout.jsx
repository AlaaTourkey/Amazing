import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
      <Navbar/>
      <div className="">
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout