import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import underline from '../assets/undeline.svg'
import SearchBar from '../components/SearchBar'
import Jobfilter from '../components/Jobfilter'
import JobCard from '../components/JobCard'
import { useDispatch, useSelector } from 'react-redux'
import { setGridResponse } from '../redux/slices/responseSlice'
import { Pagination } from '@mui/material'
import classNames from 'classnames'


const FindJobs = () => {
    const dispatch = useDispatch()
    const [page,setPage]=useState(1)
    const {gridResponse} = useSelector((state)=>state.responseReducer)
    const allJobs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    const jobsPerPage = 10
    const totalPage =  Math.ceil(allJobs.length/jobsPerPage)
    const currentPageLastIndex = page*jobsPerPage
    const currentPageFirstIndex = currentPageLastIndex-jobsPerPage
    const cardsOnPage = allJobs.slice(currentPageFirstIndex,currentPageLastIndex)
    
    return (
        <>
            <div className='px-5 lg:px-28 '>
                <Navbar />
            </div>
            <section className='py-20 bg-blue-100 px-5 lg:px-28 w-full flex flex-col'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className="flex gap-5 w-full justify-center">
                        <h1 className='text-6xl font-black'>Find your</h1>
                        <div className='flex flex-col'>
                            <h1 className="text-6xl font-black text-blue-300 underline">Dream job</h1>
                        </div>
                    </div>
                    <p className="mt-10 text-gray w-full text-center font-bold text-xl">Find your next career at companies like HubSpot, Nike, and Dropbox</p>
                    <SearchBar/>
                </div>
                <div className="mt-5">
                        <p className='text-black text-xl'>Popular: <span className='text-gray textxl'>MERN,UI/UX developer etc</span></p>
                    </div>
            </section>
            <section className='flex p-5 md:px-5 lg:px-28 w-full flex-col-reverse md:flex-row lg:flex-row'>
                    <Jobfilter/>
                <div className="flex-1 flex-col w-full py-20">
                    <div className="flex justify-between items-start lg:items-center flex-col gap-5 md:flex-row lg:flex-row">
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-bold">All <span className='text-blue-300'>Jobs</span></h1>
                            <p className="text-gray text-xl">Showing 73 Results</p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className='text-xl'>Sort By: 
                                <select>
                                    <option value="1">Most Relevant</option>
                                    <option value="1">salary</option>
                                </select>
                            </div>
                            <div className="w-px border border-gray h-10"></div>
                            <a onClick={()=>dispatch(setGridResponse(true))}><i className={classNames("text-2xl fa-solid fa-border-all",gridResponse&&"text-blue-400")}></i></a>
                            <a onClick={()=>dispatch(setGridResponse(false))}><i className={classNames(" text-2xl fa-solid fa-list",!gridResponse&&"text-blue-400 bg-blue-200")}></i></a>
                        </div>
                    </div>
                    <>
                        <div className={gridResponse?"transition-all durarion-300 delay-300 ease-in-out w-full mt-10 gap-5 grid grid-cols-2":"w-full mt-10 flex flex-col gap-5"}>
                            {
                                cardsOnPage?.map((item,index)=>(
                                    <JobCard key={index}/>
                                ))
                            }
                        </div>
                        <div className="flex w-full justify-center mt-10">


                        <Pagination variant='outlined' count={totalPage} color='primary' page={page} shape="rounded" size='large' onChange={(event,value)=>setPage(value)}/>

                        </div>
                    </>


                    
                </div>
            </section>
            <Footer />
        </>
    )
}

export default FindJobs