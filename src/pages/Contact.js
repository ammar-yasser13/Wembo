import React from 'react'
import Header from '../components/Header'

export default function Contact() {
  return (
    <>
        <Header/>
        <div className="contact w-[400px] rounded-xl bg-darkLight relative p-6 mx-auto my-16 h-[500px]">
            <form action="" method="post" className='h-full w-full flex flex-col justify-center gap-[30px] items-stretch'>
                <h1 className='text-white text-5xl font-bold text-center w-full'>Contact</h1>
                <input className='outline-none px-3 py-4 rounded-lg bg-dark border-border border-[1px] border-solid' type="text" name='fname' id="fullname" placeholder='Enter your full name'/>
                <input className='outline-none px-3 py-4 rounded-lg bg-dark border-border border-[1px] border-solid' type="email" name='email' id="email" placeholder="Enter your email"/>
                <textarea placeholder='Enter Your Message' className='outline-none px-3 py-4 rounded-lg bg-dark border-border border-[1px] border-solid' name="content" id="content" cols="30" rows="10"></textarea>
                <button className='bg-blue hover:translate-y-1 transition-all p-4 rounded-lg' type="submit">Send</button>
            </form>
        </div>
    </>
  )
}
