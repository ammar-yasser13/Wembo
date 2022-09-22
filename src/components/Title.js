import React from 'react'

export default function Title(props) {
  return (
    <div className="title w-full flex flex-col justify-center items-center gap-7">
        <h2 className='text-4xl font-bold text-center w-full'>{props.h2}</h2>
        <p className='text-lg text-center w-[100%] lg:w-[50%]'>Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor inciddiunt ulabore et dolore magna aliqua.</p>
    </div>
  )
}
