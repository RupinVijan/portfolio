import React from 'react'
import Typical from 'react-typical';

export default function Hero() {
  return (
    <>
         <div className="section aboutme" data-anchor="aboutme" style={{width:'100%'}}>
      <div className="d-flex flex-column justify-content-center mt-8 ff">
      <div className="opaque-bg animated fadeInDown">
      <h1 data-aos="zoom-in-up" data-wow-delay="1.5s">
            My Name is Rupin <br/>
            I'm a <Typical
        steps={['Software Developer', 1000, 'Web Developer', 1001 , 'Learner' , 1002,'Coder',1003]}
        loop={Infinity}
        wrapper="p"
      /> </h1>
      </div>
      </div>
      <i id="moveDown" className="fa fa-chevron-down fa-3x bounce"></i>
    </div>
    </>
  )
}
