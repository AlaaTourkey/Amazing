import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
      <Navbar />
      <div className="mb-20 mt-28">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Layout