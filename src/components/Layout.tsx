import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
   <Link to={"/"}>home</Link>
    <Outlet/>
    <h1>footer</h1>
   </>
  )
}

export default Layout