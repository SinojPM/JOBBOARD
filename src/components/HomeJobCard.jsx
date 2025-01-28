import React from 'react'
import logo1 from '../assets/CompanyLogo2.svg'
import Fulltime from './Fulltime'
import Category from './Category'

const HomeJobCard = () => {
  return (
    <div className='w-100 h-96 p-7 border border-blue-300 rounded-xl flex flex-col justify-evenly hover:shadow-xl '>
        <div className="flex justify-between">
            <div className="rounded-full overflow-hidden w-16 h-16">
                <img className='w-full' src={logo1} alt="" />
            </div>
            <Fulltime/>
        </div>
        <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold">
                Email Marketing
            </h1>
            <div className='text-xl text-gray'>Company Name-place</div>
        </div>
        <p className='h-1/5 text-ellipsis overflow-hidden text-justify'>Great platform for the job seeker that
        passionate about startups.Find your dream job easier Great platform for the job seeker that
        passionate about startups.Find your dream job easier</p>
        <div className="flex gap-5 overflow-x-hidden">
            <Category type={"Marketing"}/>
            <Category type={"sales"}/>
            <Category type={"it"}/>
            <Category type={"Marketing"}/>
            <Category type={"Marketing"}/>
        </div>
       
    </div>
  )
}

export default HomeJobCard