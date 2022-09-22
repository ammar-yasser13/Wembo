import React from 'react'

export default function Button(props) {
  return (
    <a href={props.href} className={`cursor-pointer before:opacity-50 before:top-[30px] hover:before:top-[40px] before:transition-all before:duration-300  transition-all duration-300 before:z-10 before:w-full before:h-[50%] before:left-0 before:absolute before:bg-blue hover:before:blur-xl before:blur-lg before:content-"" relative py-4 px-6 rounded-2xl z-20 bg-blue ${props.addStyle}`}>{props.text}</a>
  )
}
