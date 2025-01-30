import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import CompanyCard from '../components/CompanyCard'
import CompanyCategoryCard from '../components/CompanyCategoryCard'
import { category, responsive } from '../datas/variables'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CompanyResults from '../components/CompanyResults'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllJobsResponse } from '../redux/slices/responseSlice'
import classNames from 'classnames'
import AllCompanies from '../components/AllCompanies'




const BrowseCompanies = () => {
    const dispatch = useDispatch()
    const {allJobsResponse} = useSelector((state)=>state.responseReducer)
    useGSAP(()=>{
        gsap.from("#gsap-rec",{
            xPercent:100,
            ease:"power1.inOut",
            opacity:0
        })
    },[allJobsResponse])
  return (
    <>
        <div className='px-5 lg:px-28 '>
            <Navbar/>
        </div>
        <section className='py-20 bg-blue-100 px-5 lg:px-28 w-full flex flex-col'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className="flex flex-col md:flex-row lg:flex-row gap-2 md:gap-5 lg:gap-5 w-full justify-center">
                        <h1 className='text-6xl font-black'>Find your</h1>
                        <div className='flex flex-col'>
                            <h1 className="text-6xl font-black text-blue-300 underline">Dream Company</h1>
                        </div>
                    </div>
                    <p className="mt-10 text-gray w-full text-center font-bold text-xl">Find the <span className='text-blue-300'>Dream Companies</span> you dream working For</p>
                    <SearchBar/>
                </div>
                <div className="mt-5">
                        <p className='text-black text-xl'>Popular: <span className='text-gray textxl'>MERN,UI/UX developer etc</span></p>
                    </div>
            </section>
            <div className={classNames('w-100',!allJobsResponse&&"hidden")}>
                <AllCompanies/>
            </div>
            <div id='gsap-rec' className={classNames('w-100',allJobsResponse&&"hidden")}>
                <section className='px-5 lg:px-28 py-20'>
                   <div className='flex justify-between flex-col md:flex-row lg:flex-row'>
                       <div> 
                       <h1 className="text-start text-4xl md:text-5xl lg:text-5xl font-bold">Recomended Companies</h1>
                       <h1 className="text-xl text-gray font-semibold">Based On Your Profile, company Preferances And recent Activity</h1>
                       </div>
                       <div className='mt-10'><a onClick={()=>dispatch(setAllJobsResponse(true))} className="text-blue-400 ms-10 cursor-pointer">View all Companies  <i className="fa-solid fa-arrow-right"></i></a></div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-10">
                    <CompanyCard/>
                    <CompanyCard/>
                    <CompanyCard/>
                    <CompanyCard/>
                    <CompanyCard/>
                    <CompanyCard/>
                    <CompanyCard/>
                   </div>
                
                </section>
                <section className='px-5 lg:px-28 py-20 bg-blue-100 w-full overflow-x-hidden'>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">Companies by category</h1>
                    <Carousel className='my-10' responsive={responsive} slidesToSlide={1} focusOnSelect={true}>
                        {
                            category?.map(item=>(
                                <CompanyCategoryCard data={item}/>
                            ))
                        }
                    </Carousel>
                    <>
                        <div className='flex gap-5 items-center mb-5'>
                            <div className="bg-white text-blue-400 rounded-full text-2xl flex justify-center items-center w-12 h-12">
                            <i class="fa-solid fa-square-poll-horizontal"></i>
                            </div>
                            <h1 className='text-2xl font-black'>24 Results</h1>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-10">
                            <div className=" w-full flex justify-center items-center">
                            <CompanyResults/>
                            </div>
                            <div className=" w-full flex justify-center items-center">
                            <CompanyResults/>
                            </div>
                            <div className=" w-full flex justify-center items-center">
                            <CompanyResults/>
                            </div>
                            <div className=" w-full flex justify-center items-center">
                            <CompanyResults/>
                            </div>
                            <div className=" w-full flex justify-center items-center">
                            <CompanyResults/>
                            </div>
                            <div className=" w-full flex justify-center items-center">
                            <CompanyResults/>
                            </div>
                            <div className=" w-full flex justify-center items-center">
                            <CompanyResults/>
                            </div>
                            <div className=" w-full flex justify-center items-center">
                            <CompanyResults/>
                            </div>
                        </div>
                        <div className='mt-10'><a href="#" className="text-blue-400 ms-10">View More Companies  <i className="fa-solid fa-arrow-right"></i></a></div>
                    
                    </>
                </section>
            </div>
        <Footer/>
    </>
  )
}

export default BrowseCompanies