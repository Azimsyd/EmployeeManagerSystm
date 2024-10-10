import React from 'react'
import Navbar from '../components/Navbar'
import Index from '../page/Dashboard/Index'
// import Header from './Header'

function Dashboard() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20  mt-32">
        <Navbar />
        <Index />
      </div>
      </>
      )
}

export default Dashboard
