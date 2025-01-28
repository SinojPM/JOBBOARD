import React from 'react'
import Companyfilter from './Companyfilter'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const AllCompanies = () => {
    useGSAP(()=>{
        gsap.from("#allJobs",{
            xPercent:100,
            ease:"power1.inOut",
            duration:"3",
            opacity:0
        })
    },[])
  return (
    <section id='allJobs' className='transition-opacity flex p-5 md:px-5 lg:px-28 w-full'>
                    <Companyfilter/>   
            </section>
  )
}

export default AllCompanies