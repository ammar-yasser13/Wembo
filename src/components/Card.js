import React from 'react'

export default function Card(props) {
  return (
    <div className={`${props.active === true ? "active" : "unactive"} ${props.addStyle} card border-border border-solid border-[1px] bg-darkLight rounded-2xl 
                    flex lg:flex-row gap-[30px] justify-between lg:items-center lg:text-center p-[30px]
                    flex-col items-center text-center`}>
        <div className="icon">
            <i className={`${props.icon} text-5xl font-bold`}></i>
        </div>
        <div className="content flex flex-col justify-between gap-5 items-center
                        lg:items-start lg:text-start">
            <h3 className='text-3xl font-bold'>{props.h3}</h3>
            <p className='text-lg'>{props.p}</p>
        </div>
    </div>
  )
}
