import React, { useState } from 'react'
import Companyfilter from './Companyfilter'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import CompanyCard from './CompanyCard'
import { Pagination } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setAllJobsResponse } from '../redux/slices/responseSlice'


const AllCompanies = () => {
    const [page,setPage]=useState(1)
    const dispatch = useDispatch()
    const allCompanies = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
    const companiesPerPage = 10
    const totalPage =  Math.ceil(allCompanies.length/companiesPerPage)
    const currentPageLastIndex = page*companiesPerPage
    const currentPageFirstIndex = currentPageLastIndex-companiesPerPage
    const cardsOnPage = allCompanies.slice(currentPageFirstIndex,currentPageLastIndex)

  return (
    <section className='flex p-5 md:px-5 lg:px-28 w-full flex-col-reverse md:flex-row lg:flex-row'>
        <Companyfilter/>   
        <div className="flex-1 flex-col w-full py-20">
                    <div className="flex justify-between items-start lg:items-center flex-col gap-5 md:flex-row lg:flex-row">
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-bold">All <span className='text-blue-300'>Companies</span></h1>
                            <p className="text-gray text-xl">Showing 73 Results</p>
                        </div>
                        <div className='mt-10'><a onClick={()=>dispatch(setAllJobsResponse(false))} className="text-blue-400 ms-10 cursor-pointer">Go to Categories<i className="fa-solid fa-arrow-right"></i></a></div>
                        
                    </div>
                    <>
                        <div className={"transition-all durarion-300 delay-300 ease-in-out w-full mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2"}>
                            {
                                cardsOnPage?.map((item,index)=>(
                                    <CompanyCard key={index}/>
                                ))
                            }
                        </div>
                        <div className="flex w-full justify-center mt-10">


                        <Pagination variant='outlined' count={totalPage} color='primary' page={page} shape="rounded" size='large' onChange={(event,value)=>setPage(value)}/>

                        </div>
                    </>


                    
                </div>       
    </section>
    
  )
}

export default AllCompanies