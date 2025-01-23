import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import underline from '../assets/undeline.svg'
import SearchBar from '../components/SearchBar'
import Jobfilter from '../components/Jobfilter'

const FindJobs = () => {
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
            <section className='flex p-0 md:px-5 lg:px-28'>
                <Jobfilter/>
            </section>
            <Footer />
        </>
    )
}

export default FindJobs