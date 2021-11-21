import React from 'react'
import Typical from 'react-typical'

export default function Intro() {
    return (
        <div className='Intro'>
            <h1>Hello ,
            <br/>My Name is Rupin <br/>
            I'm a <Typical
        steps={['Software Developer', 1000, 'Web Developer', 1001 , 'Learner' , 1002,'Coder',1003]}
        loop={Infinity}
        wrapper="p"
      /> </h1>
        </div>
    )
}
