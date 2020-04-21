import React from 'react'


import '../scss/application.scss'
import ScrollAnimation from 'react-animate-on-scroll'



const Actions = () => {

  return (
    
    <div>
     
      <div className="section1"></div>

      <div className="section2 flex">
        <ScrollAnimation delay={4000} duration={2} animateIn='flipInY' animateOut='flipOutY' className="box"></ScrollAnimation>
        <ScrollAnimation duration={2} animateIn="flipInY" animateOut='flipOutY' className="box"></ScrollAnimation>
        <ScrollAnimation duration={2} animateIn="flipInY" animateOut='flipOutY' className="box"></ScrollAnimation>
      </div>

      <div className="section3"></div>
    </div>
  )
}

export default Actions