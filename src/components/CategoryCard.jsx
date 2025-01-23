import React from 'react'



const CategoryCard = ({data}) => {
  return (
    <div className='w-full flex flex-col justify-center gap-5 p-2 md:p-6 lg:p-10 items-start border shadow border-gray hover:bg-green-200'>
        <i className={`${data.icon} text-blue-300 text-4xl`}></i>
        <h1 className="text-2xl font-extrabold text-black">{data.cName}</h1>
        <p className='text-gray'>455 jobs available <a href=""><i className="fa-solid fa-arrow-right text-blue-300 hover:text-green-100 text-2xl"></i></a></p>
    </div>
  )
}

export default CategoryCard