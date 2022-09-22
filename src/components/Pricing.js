import React,{useEffect} from 'react'
import CardPrice from './CardPrice'
import Title from './Title'

export default function Pricing() {
  useEffect(() => {
    window.addEventListener('scroll' , () => {
      let eles = document.querySelectorAll('.anihiddP');
      console.log(window.scrollY);
      if (window.scrollY >= 1300) {
        eles.forEach(ele => {
          ele.classList.add('show-all')
        });
      }
    })
  })
  return (
    <div id="Pricing" className='pricing w-full relative py-16'>
        <div className="container flex flex-col justify-between items-center gap-28">
            <Title h2="Pricing" />
            <div className="anihiddP hidden-bottom transition-all duration-1000 cards price grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                <CardPrice price="99$" free="3" supp="1" traffic="25%"/>
                <CardPrice price="399$" free="12" supp="3" traffic="50%"/>
                <CardPrice price="899$" free="" supp="24/7" traffic="100%"/>
            </div>
        </div>
    </div>
  )
}
