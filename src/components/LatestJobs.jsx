import React from 'react'
import logo1 from '../assets/CompanyLogo1.svg'
import Category from './Category'

const LatestJobs = () => {
    return (
        <div className='w-full flex gap-5 bg-white shadow p-7'>
            <div className="bg-red-100 rounded-full overflow-hidden w-16 h-16">
                <img className='w-full' src={logo1} alt="" />
            </div>
            <div className="flex-1 float-start flex flex-col gap-5">
                <h1 className="text-2xl font-extrabold">
                    Email Marketing
                </h1>
                <div className='text-xl text-gray'>Company Name-place</div>
                <div className="flex gap-5 overflow-x-hidden">
            <Category type={"Marketing"}/>
            <Category type={"sales"}/>
            <Category type={"it"}/>
            <Category type={"Marketing"}/>

        </div>
            </div>


        </div>
    )
}

export default LatestJobs