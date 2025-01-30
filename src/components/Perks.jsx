import React from 'react'

const Perks = ({data}) => {
    const {name,description,iconClass} = data
  return (
    <div className='flex flex-col w-full gap-5'>
        <i className={`text-5xl text-blue-400 ${iconClass}`}></i>
        <h1 className="text-2xl text-black font-bold">{name}</h1>
        <p className="text-gray text-xl font-bold">{description}</p>
    </div>
  )
}

export default Perks