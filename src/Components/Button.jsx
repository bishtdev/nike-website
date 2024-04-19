import React from 'react'

const Button = ({label , iconUrl, backgroundColor, textColor, borderColor}) => {
  return (
  <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg bg-coral-red rounded-full text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300`}>
      {label}
     {iconUrl && <img 
     src={iconUrl}
     alt="arrow right icon"
     className='ml-2 rounded-full w-5 h-5'
      />}
    </button>
  )
}

export default Button