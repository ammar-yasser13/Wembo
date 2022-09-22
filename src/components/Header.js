import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.svg" 
export default function Header() {
    function showNav(ele) {
        let nav = document.getElementById('nav')
        nav.classList.toggle('show')
        let button = ele.target
        button.classList.toggle('hover')
    }
  return (
    <header className='bg-transparent w-full h-[100px] z-30'>
        <div className="container flex flex-row justify-between items-center h-full">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav id='nav' className='z-30 translate-x-[-300px] opacity-0 transition-all duration-300 flex flex-col justify-start flex-auto items-start h-[100vh] absolute top-0 left-0 w-[70%] bg-darkLight
                            md:translate-x-0 md:opacity-[100%] md:flex-row md:justify-center md:flex-1 md:items-center md:h-full md:relative md:w-fit md:bg-transparent'>
                <ul className="links flex flex-col justify-start w-full items-start gap-y-[30px] p-4
                              md:flex-row md:justify-end md:items-center md:gap-[30px] md:p-0
                              ">
                    <li><Link className='active' to="/">Home</Link></li>
                    <li><a href="#Feature">Feature</a></li>
                    <li><a href="#Pricing">Pricing</a></li>
                    <li><a href="#Download">Download</a></li> 
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div onClick={showNav} className="bars p-4 flex flex-col justify-center items-center text-3xl cursor-pointer text-white
                            md:hidden
                            ">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    </header>
  )
}
