import React from 'react'
import Button from './Button'
export default function CardPrice(props) {
  return (
    <div className={`${props.addStyle} card gap-[30px] rounded-3xl bg-darkLight border-border p-[30px] flex flex-col justify-center items-center gap-30px`}>
        <h3 className='Price text-6xl text-center font-bold'>{props.price}</h3>
        <p className='w-full text-center text-lg'>This package only lasts for one month</p>
        <div className="options w-full ">
            <ul className='w-full text-lg opacity-70'>
                <li><i className="fa-regular fa-circle-check opacity-100 text-green"></i> E-mail support</li>
                <li><i className="fa-regular fa-circle-check opacity-100 text-green"></i> {props.free} Free Optimization</li>
                <li><i className="fa-regular fa-circle-check opacity-100 text-green"></i> {props.supp} years support</li>
                <li><i className="fa-regular fa-circle-check opacity-100 text-green"></i> Increase traffic {props.traffic}</li>
            </ul>
        </div>
        <Button text="Get Start" addStyle="w-full text-center before:hidden"/>
    </div>
  )
}
