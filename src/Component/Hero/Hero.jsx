import React from 'react'
import img1 from  '../images/img1.jpeg';
import video1 from '../video/video1.mp4';
import { FaArrowRightLong } from "react-icons/fa6";
import "../Hero/Hero.css"

const Hero = () => {
  return (
    <>
    
      
      <div className='heroContainer'>
        
        <video loop autoPlay muted src={video1} className='video_hero'></video>
          <div className='gradient'></div>
      
         <div className='hero_text'>
            <h4 className='text_1'>FEATURED PODCAST EPISODE</h4>
            <h1 className='text_2'>#13: The joy of putting ideas into reality and pen to paper</h1>
            <p className='text_3'>Vince Smith met bandmates Jim Kelly and Nancy Gibbs at a Sex Pistols concert, where he tried to kiss Sid Vicious' guitar and got a bloody nose. Together they formed Aftershock.</p>
        </div> 

        <div>
        <img src= {img1} alt="image" className='hero_img' /> 
       
      </div>
         {/* subscribe icon */}
     {/* <div className='subscribe_container'>
        <ul>
          <li><button></button></li>
          <li><button></button></li>
        </ul>

        <button>Browse all Episdoes <FaArrowRightLong /></button>
    </div> */}
 
     </div>
     

     

 
       

        
    </>
  )
}

export default Hero