import React, { useState } from "react";
import Logo from "../assets/img/logo-black.png";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-[#F5F7FA]">
      <div className="container mx-auto max-w-[1320px] relative h-auto p-10 flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px] ">
        <div>
            <a href="#">
                <img src={Logo} alt=""/>
            </a>
        </div>
        <ul className='flex flex-col my-5 md:flex-row '>
            <li className='my-2 md:mx-4'><a href="#">Service</a></li>
            <li className='my-2 md:mx-4'><a href="#">Home</a></li>
            <li className='my-2 md:mx-4'><a href="#">Feature</a></li>
            <li className='my-2 md:mx-4'><a href="#">Product</a></li>
            <li className='my-2 md:mx-4'><a href="#">Testimonial</a></li>
            <li className='my-2 md:mx-4'><a href="#">Testimonial</a></li>
            <li className='my-2 md:mx-4'><a href="#">FAQ</a></li>
        </ul>
        <ul className='flex flex-col my-5 md:flex-row '>
            <li className='my-2 md:mx-4'><a href="#">Login</a></li>
            <li className='my-2 md:mx-4'><a href="#">Singup</a></li>
          
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
