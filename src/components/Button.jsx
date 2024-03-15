import React from 'react'

const Button = ({name, logo, src}) => {
  return (
    <button className='flex justify-center items-center gap-3 bg-orange px-3 py-3 rounded-lg text-[15px]'>
        {name}
        {logo}
        {src ? <img src={src} alt="" className='w-[20px]' /> : null}
    </button>
  )
}

export default Button