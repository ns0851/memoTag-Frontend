import React from 'react'

const Button = ({text}) => {
  return (
    <button className='px-4 py-2 hover:bg-blue-800 transition-all rounded bg-blue-600 text-white font-bold'>{text}</button>
  )
}

export default Button