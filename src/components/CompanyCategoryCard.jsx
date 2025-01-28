import React from 'react'

const CompanyCategoryCard = ({data}) => {
  return (
    <div className='ms-10 flex flex-col gap-10 text-blue-400 hover:text-white bg-white hover:bg-blue-400 border border-gray min-w-80 h-48 p-7'>
        <i className={`${data.icon} text-4xl`}></i>
        <h1 className="text-2xl font-extrabold">{data.cName}</h1>
    </div>
  )
}

export default CompanyCategoryCard