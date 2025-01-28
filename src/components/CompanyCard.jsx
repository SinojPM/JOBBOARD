import React from 'react'
import logo1 from '../assets/CompanyLogo2.svg'
import Category from './Category'

const CompanyCard = () => {
    return (
        <div className='w-full h-96 p-7 flex flex-col gap-10 border border-gray'>
            <div className="flex w-full justify-between items-center">
                <div className="overflow-hidden w-16 h-16">
                    <img className='w-full' src={logo1} alt="" />
                </div>
                <div className="bg-blue-100 p-3 rounded-full text-blue-400">
                    3 jobs
                </div>
            </div>
            <div className="text-2xl font-bold">Company Name</div>
            <p className='h-20 text-ellipsis overflow-hidden text-justify'>Great platform for the job seeker that
        passionate about startups.Find your dream job easier Great platform for the job seeker that
        passionate about startups.Find your dream job easier</p>
        <div className="flex gap-5 overflow-x-hidden">
            <Category type={"Marketing"}/>
            <Category type={"sales"}/>
            <Category type={"it"}/>
        </div>
            
        </div>
    )
}

export default CompanyCard