import React from 'react'
import Common  from './Common'
import img from "../src/images/img-2.jpg"

const Home = () => {
    return (
        <>
          <Common 
          name="Grow your business with"
          imgname={img}
          visit="/service"
          btname="Get Started"/>
        </>
    )
}

export default Home
