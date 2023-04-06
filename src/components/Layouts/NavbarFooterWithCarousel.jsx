import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import JobCarousel from '../JobCarousel/JobCarousel'

function NavbarWithCarousel() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column'}}>
        <Navbar />
        <JobCarousel/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default NavbarWithCarousel