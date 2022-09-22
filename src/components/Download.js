import React,{useEffect} from 'react'
import tablet from '../assets/images/tablet.svg'
import Button from './Button'
export default function Download() {
  useEffect(() => {
    window.addEventListener('scroll' , () => {
      let eles = document.querySelectorAll('.anihiddD');
      console.log(window.scrollY);
      if (window.scrollY >= 1600) {
        eles.forEach(ele => {
          ele.classList.add('show-all')
        });
      }
    })
  })
  return (
    <div id="Download" className='download w-full relative py-16'>
        <div className="container flex flex-col justify-start items-center gap-12
                        lg:flex-row lg:justify-between lg:items-center">
            <div className="anihiddD hidden-bottom transition-all duration-1000 image w-[100%]">
                <img src={tablet} alt="tablet" className='w-full' />
            </div>
            <div className="content lg:text-start text-center gap-8 flex flex-col justify-start items-center lg:items-start">
                <h2 className='anihiddD hidden-bottom transition-all duration-500 text-5xl font-bold'>Our App Available For Any Device Download now</h2>
                <p className='anihiddD hidden-bottom transition-all duration-700 text-lg w-full md:w-[70%]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fug.</p>
                <Button href="/" text="Download" addStyle="anihiddD hidden-bottom transition-all duration-1000 w-full lg:w-fit" />
            </div>
        </div>
    </div>
  )
}
