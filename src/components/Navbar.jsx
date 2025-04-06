import React, { useState } from "react";
import Logo from "../assets/img/logo-black.png";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-[#F5F7FA]">
      <div className="container mx-auto max-w-[1320px] relative h-auto p-10 flex flex-col md:flex-row">
        <div>
            <a href="#">
                <img src={Logo} alt=""/>
            </a>
        </div>
        <ui>
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Feature</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">FAQ</a></li>
        </ui>
        <ui>
            <li><a href="#">Login</a></li>
            <li><a href="#">Singup</a></li>
          
        </ui>

      </div>
    </nav>
  );
}

export default Navbar;
