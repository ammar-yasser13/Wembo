import React, { useEffect } from 'react'
import Card from './Card'
import Title from './Title'
export default function Feature() {
  useEffect(() => {
    window.addEventListener('scroll' , () => {
      let eles = document.querySelectorAll('.anihidd');
      if (window.scrollY >= 600) {
        eles.forEach(ele => {
          ele.classList.add('show-all')
        });
      }
    })
  })
  
  return (
    <div id="Feature" className='feature relative py-6 lg:py-16 w-full '>
        <div className="container flex flex-col justify-between gap-[100px] items-center">
            <Title h2="Feature" />
            <div className="anihidd hidden-bottom transition-all duration-1000 cards grid grid-cols-1 lg:grid-cols-2 gap-8 gap-x-16">
                <Card h3="Easy to Costomize" p="Dorem ipsum dolor sitamet, consectetur adipiscing elit." active={true} icon="fa-solid fa-gears" />
                <Card h3="Customer Support" p="Dorem ipsum dolor sitamet, consectetur adipiscing elit." active={false} icon="fa-solid fa-headset" />
                <Card h3="Extreme Security" p="Dorem ipsum dolor sitamet, consectetur adipiscing elit." active={false} icon="fa-solid fa-shield" />
                <Card h3="Creative Design" p="Dorem ipsum dolor sitamet, consectetur adipiscing elit." active={false} icon="fa-solid fa-swatchbook" />
            </div>
        </div>
    </div>
  )
}
