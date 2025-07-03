import React from 'react'
import Home from '../../Pages/Home'
import Customslider from '../../Pages/Customslider'
import Menu from '../../Pages/Menu'
import Blog from '../../Pages/Blog'
import Service from '../../Pages/Service'
import Chef from '../../Pages/Chef'
import Table from '../../Pages/Table'
import Contact from '../../Pages/Contact'
import Testimonials from '../Testimonials'
import Footer from '../Footer'
const Landing = () => {
  return (
    <>
    <Home/>
    <Customslider/>
    <Menu/>
    <Blog/>
    <Service/>
    <Chef/>
    <Table/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
    
  )
}

export default Landing