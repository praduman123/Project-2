import React from 'react';
import Common from "./Common";
import img from "../src/images/img-5.jpg";

const About = () => {
    return (
        <>
         <Common  
          name="Welcom to About page "
          imgname={img}   
          visit="/contact"
          btname="Contact Us"
         />
        </>
    )
}

export default About
