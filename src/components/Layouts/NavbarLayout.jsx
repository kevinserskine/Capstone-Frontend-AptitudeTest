import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

function NavbarLayout() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column'}}>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default NavbarLayout