import React from 'react'
import { Link } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { IoIosMicrophone } from "react-icons/io";
import { RiMoonClearLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { RiArrowDropDownFill } from "react-icons/ri";
import "../Navbar/Navbar.css"


const Navbar = () => {
  return (
    <div>
        <nav>
            {/* nav home link */}
            <div className='home'>
            
                    <div className='homeName'>
                       <span><IoIosMicrophone className='mic'/>BATERIA</span>
                    </div>
                    
                    <div className='border'>

                    </div>
                    {/* social media icons */}
                    <div >
                        <ul className='socialMedia_icon'>
                            <li><BsTwitterX /></li>
                            <li><BsInstagram /></li>
                            <li><BsYoutube /></li>

                        </ul>
                    </div>
           
            </div>

            


            {/* nav options */}
            <div className='options'>
                   
                    <div className='home_options'>
                        
                        <ul>
                        <li><b>Home</b><RiArrowDropDownFill className='icon_arrow'/> </li>
                       
                        <li>Episode<RiArrowDropDownFill className='icon_arrow'/></li>
                        
                        
                        <li>Blog <RiArrowDropDownFill className='icon_arrow'/></li>
                        <li>Shop <RiArrowDropDownFill className='icon_arrow'/></li>
                        <li>Features <RiArrowDropDownFill className='icon_arrow'/></li>
                        <li>Contact <RiArrowDropDownFill className='icon_arrow'/></li>
                    
                        </ul>
                    </div>

            {/*  nav icons */}
            <div className='nav-icons'>
                   
                    <ul>
                        <li><RiMoonClearLine/></li>
                        <li><IoSearch/></li>
                        <li><FaBagShopping/></li>
                    </ul>
           
            </div>
                
            </div>
        </nav>
    {/* End of Navbar */}
    </div>
  )
}

export default Navbar