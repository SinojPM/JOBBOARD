import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import underline from '../assets/undeline.svg'
import { TextField } from '@mui/material'
import amd from "../assets/amd.svg"
import intel from "../assets/intel.svg"
import tesla from "../assets/tesla.svg"
import vodafone from "../assets/vodafone.svg"
import talkit from "../assets/talkit.svg"
import CategoryCard from '../components/CategoryCard'
import { category } from '../datas/variables'
import dashboard from '../assets/DashboardCompany.svg'
import HomeJobCard from '../components/HomeJobCard'
import LatestJobs from '../components/LatestJobs'




const Home = () => {
  return (
    <>
        <div>
            <div className="w-full px-5 lg:px-28 fixed bg-white z-10">
                <Navbar/>
            </div>
            <section className='lg:h-screen w-full flex flex-col justify-center items-between bg-blue-100 px-8 lg:px-28 py-28 lg:py-auto gap-5'>
                <div className='mt-28 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 items-center'>
                    <div>
                        <h1 className='text-dark text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black'>Discover <br />More Than <br /><span className='text-blue-300'>5000+ Jobs</span></h1>
                        <img className='mt-5 w-4/5 md:w-3/6' src={underline} alt="" />
                        <p className='text-xl lg:text-2xl text-gray'>Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                    </div>
                </div>
                <div className='w-full flex justify-center lg:justify-start'>
                    <div className="shadow w-full lg:w-4/6 p-5 mt-5 flex justify-evenly items-center gap-5 lg:gap-0 flex-col md:flex-row lg:flex-row">
                        <div className="flex gap-3 items-center">
                        <i className="fa-solid fa-magnifying-glass text-2xl"></i>
                        <TextField className='w-72' id="standard-basic" label="Job Title" variant="standard" />
                        </div>
                        <div className="flex gap-3 items-center">
                        <i className="fa-solid fa-location-dot text-2xl"></i>
                        <TextField className='w-72' id="standard-basic" label="Location" variant="standard"/>
                        </div>
                        <button className="text-white bg-blue-400 p-5">
                            Search My Job
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                        <p className='text-black text-xl'>Popular: <span className='text-gray textxl'>MERN,UI/UX developer etc</span></p>
                    </div>
            </section>
            <div className="px-5 lg:px-28 py-10 text-gray text-2xl font-bold">
                <p>Companies we helped grow</p>
                <div className="py-10 flex justify-between items-center flex-wrap gap-5">
                    <img src={vodafone} alt="" />
                    <img src={amd} alt="" />
                    <img src={intel} alt="" />
                    <img src={tesla} alt="" />
                    <img src={talkit} alt="" />
                </div>
            </div>
            <section className="px-5 lg:px-28 py-10 bg-blue-100">
                <h1 className='text-4xl font-black text-gray'>Explore By <span className='text-4xl text-blue-300' >Category</span></h1>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        category?.map((item)=>(
                            <CategoryCard data={item}/>
                        ))
                    }
                </div>
            </section>

            <section className='text-white px-5 lg:px-28 overflow-hidden'>
                <div className="flat-corner bg-blue-400 px-5 lg:px-24 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <div className="w-100 flex flex-col gap-10 my-20">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl fond-dark">Start Posting <br /> Jobs Today</h1>
                        <p className='font-bold'>Start posting jobs for Only 10$</p>
                        <button className=' w-5/6 md:w-4/6 lg:w-2/6 py-5 bg-white text-blue-400 hover:bg-red-100'>SignUp for Free</button>
                    </div>
                    <div className="flex justify-end items-end">
                        <img src={dashboard} alt="" />
                    </div>

                </div>
            </section>
            <section className="px-5 lg:px-28 py-10">
            <div className='text-blue-400 text-xl flex sm:flex-wrap justify-between items-center'>
                    <h1 className='text-4xl font-black text-gray'>Featured <span className='text-4xl text-blue-300' >Jobs</span></h1>
                    <a href="">Show All<i class="fa-solid fa-arrow-right text-blue-300 hover:text-green-100 text-2xl"></i></a>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <HomeJobCard/>
                    <HomeJobCard/>
                    <HomeJobCard/>
                    <HomeJobCard/>
                    <HomeJobCard/>
                    <HomeJobCard/>
                    <HomeJobCard/>
                    <HomeJobCard/>
                </div>
            </section>
            <section className="px-5 lg:px-28 py-10 bg-blue-100">
                <div className='text-blue-400 text-xl flex sm:flex-wrap justify-between'>
                    <h1 className='text-4xl font-black text-gray'>Latest <span className='text-4xl text-blue-300' >Jobs</span></h1>
                    <a href="">Show All<i class="fa-solid fa-arrow-right text-blue-300 hover:text-green-100 text-2xl"></i></a>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    <LatestJobs/>
                    <LatestJobs/>
                    <LatestJobs/>
                    <LatestJobs/>
                    <LatestJobs/>
                    <LatestJobs/>
                </div>
            </section>

        </div>
        <Footer/>
    </>
  )
}

export default Home