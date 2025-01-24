import React, { useState } from 'react'
import Category from './Category'
import logo1 from '../assets/CompanyLogo1.svg'
import { LinearProgress } from '@mui/joy'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

const JobCard = () => {
    const [progress,setProgress] = useState(20)
    const {gridResponse} = useSelector((state)=>state.responseReducer)
    return (
        <div className={classNames('transition-all duration-300 delay-150 ease-in-out w-full gap-5 flex justify-between p-7 border border-gray shadow-xl rounded',gridResponse?"flex-col px-5":"flex-col md:flex-row lg:flex-row px-5 lg:px-28")}>
            <div className='flex flex-col md:flex-row lg:flex-row gap-5'>
                <div className="bg-red-100 rounded-full overflow-hidden w-16 h-16">
                    <img className='w-full' src={logo1} alt="" />
                </div>
                <div className="flex-1 float-start flex flex-col gap-5">
                    <h1 className="text-2xl font-extrabold">
                        Email Marketing
                    </h1>
                    <div className='text-xl text-gray'>Company Name-place</div>
                    <div className="flex gap-5 overflow-x-hidden w-full">
                        <Category type={"Marketing"} />
                        <Category type={"sales"} />
                        <Category type={"it"} />
                        <Category type={"Marketing"} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <button className="p-5  bg-blue-400 text-white rounded w-full">Apply</button>
                <div className="w-100 bg-gray h-3 relative rounded-full overflow-hidden">
                    <div style={{width:`${progress}%`}} className="absolute h-3 bg-green-100 rounded-full"></div>
                </div>
                <p className='text-black font-bold'>5 Applied <span className='text-gray'>of 10 capacity</span></p>
            </div>

        </div>
    )
}

export default JobCard