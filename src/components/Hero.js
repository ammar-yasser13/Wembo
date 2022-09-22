import React, { useEffect } from 'react'
import imgHero from '../assets/images/Hero.svg'
import Button from './Button'
export default function Hero() {
  useEffect(() => {
    let content = document.querySelectorAll('.content'),
        imageHero = document.getElementById('image-hero');
        if (imageHero.classList.contains('hidden-bottom')) {
          content.forEach(ele => {            
            ele.classList.add('show-all')
          });
          imageHero.classList.add('show-all')
        }       
  })
  
  return (
    <div className='hero w-full relative py-24 '>
        <div className="container flex flex-col justify-between items-stretch gap-16
                        md:gap-0 md:flex-row md:items-center">
            <div className="flex flex-col justify-start items-stretch gap-8 text-center
                            md:justify-center md:items-start md:text-start">
              <h1 className=' text-5xl content hidden-bottom transition-all duration-500 font-bold leading-[56px]'>Get Things done <br />with<span className='gradient-1'> Wembo.</span></h1>
              <p className='content text-lg hidden-bottom transition-all duration-700 md:w-[70%]'>Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor inciddiunt ulabore et dolore magna aliqua.</p>
              <Button text="Download" addStyle="content hidden-bottom transition-all duration-1000" href="/"/>
            </div>
            <div id="image-hero" className="image-hero hidden-bottom transition-all duration-1000">
              <img src={imgHero} className="w-full object-cover" alt="Hero" />
            </div>
        </div>
    </div>
  )
}
