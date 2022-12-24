import React, { useEffect } from 'react'
import Hero from './home/Hero'
import Content from './home/Content'
import Clients from './home/Clients'
import WhyUs from './home/WhyUs'

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, [])
  return (
    <>
      <Hero></Hero>
      <Content></Content>
      <Clients></Clients>
      <WhyUs></WhyUs>
    </>
  )
}

export default Home
