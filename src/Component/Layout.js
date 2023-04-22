import { CssBaseline } from '@mui/material'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <CssBaseline />
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
