import React from 'react'

export default function Footer() {
  function scrollTop() {
    window.scrollTo(0, 0)
  }
  return (
    <footer className='footer relative h-[100px] bg-darkLight'>
        <div className="container flex flex-row justify-between items-center h-full">
            <p className='text-lg text-start'>© All copyrights to developer <span className='text-blue'>Ammar</span></p>
            <div onClick={scrollTop} className="scroll-top hover:text-blue cursor-pointer py-2 px-3 rounded-lg bg-dark">
                <i className="fa-solid fa-chevron-up "></i>
            </div>
        </div>
    </footer>
  )
}
