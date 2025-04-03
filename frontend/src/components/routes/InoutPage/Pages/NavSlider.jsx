import React, { useContext } from 'react'
import './NavSlider.css'
import { ConTextDef } from './conTextDef';

function NavSlider() {

    const {rotate,setRotate}= useContext(ConTextDef);

  return (
    <div  className={` Navs ${rotate ? "NavSliderOpen" : "NavSliderClose" }`}>
      
     
        <div className='NavOptions'>Home</div>
        <div className='NavOptions'>Home</div>
        <div className='NavOptions'>Home</div>
        <div className='NavOptions'>Home</div>
        <div className='NavOptions'>Home</div>
        <div className='NavOptions'>Home</div>
        <div className='NavOptions'>Home</div>
        <div className='NavOptions'>Home</div>
        <div className='NavOptions'>Home</div>
        <div className='NavOptions'>Home</div>
     
      
      
     
     </div>
  )
}

export default NavSlider
