import React from 'react'
import Navbar from '../components/Navbar'
import stripe from '../assets/stripeLogo.svg'
import ci1 from '../assets/Companyimg1.png'
import ci2 from '../assets/Companyimg2.png'
import ci3 from '../assets/Companyimg3.png'
import ci4 from '../assets/Companyimg4.png'
import html from '../assets/tech/html.svg'
import css from '../assets/tech/css.svg'
import framer from '../assets/tech/framer.svg'
import js from '../assets/tech/js.svg'
import mixpanel from '../assets/tech/mixpanel.svg'
import ruby from '../assets/tech/ruby.svg'

const techStack = [
    {
        tech: 'HTML5',
        img: html
    },
    {
        tech: 'CSS',
        img: css
    },
    {
        tech: 'Javascript',
        img: js
    },
    {
        tech: 'Ruby',
        img: ruby
    },
    {
        tech: 'Mixpanel',
        img: mixpanel
    },
    {
        tech: 'Framer',
        img: framer
    }
]


const CompanyProfile = () => {
    return (
        <>
            <div className="px-5 lg:px-28">
                <Navbar />
            </div>
            <div className="bg-blue-100 px-5 lg:px-28 py-20">
                <div className="text-gray text-xl font-semibold">Home/Companies/<span className='text-black'>Company Name</span></div>
                <div className="mt-16 flex gap-12 flex-col md:flex-row lg:flex-row">
                    <div className="w-52 h-52 border">
                        <img className='w-full h-full' src={stripe} alt="" />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='flex gap-10'>
                            <h1 className="text-5xl font-bold text-black">Stripe</h1>
                            <div className="p-3 border border-blue-400 text-blue">20 Jobs</div>
                        </div>
                        <a className='text-blue' href="">Http://Stripe.com</a>
                        <div className="flex gap-5 w-full flex-col md:flex-row lg:flex-row items-start mt-10 md:mt-0 lg:mt-0">
                            <div className="flex justify-center items-center gap-5">
                                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full text-blue-300">
                                    <i className="fa-solid fa-fire text-3xl"></i>
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold text-gray">Founded</h1>
                                    <h1 className='text-black text-2xl font-semibold'>july 31,2011</h1>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-5">
                                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full text-blue-300">
                                    <i className="fa-solid fa-users text-3xl"></i>
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold text-gray">Employees</h1>
                                    <h1 className='text-black text-2xl font-semibold'>4000 +</h1>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-5">
                                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full text-blue-300">
                                    <i className="fa-solid fa-location-dot text-3xl"></i>
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold text-gray">Location</h1>
                                    <h1 className='text-black text-2xl font-semibold'>20 Contries</h1>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-5">
                                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full text-blue-300">
                                    <i className="fa-solid fa-building text-3xl"></i>
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold text-gray">Industry</h1>
                                    <h1 className='text-black text-2xl font-semibold'>Payment Gateway</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* company profile section including imges,contact tech stack office location */}
            <section className="py-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-5 lg:p-28 gap-14">
                {/* Company Profile,contact,imgs */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2">
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold">Company-profile</h1>
                        <p className="mt-10 text-gray text-xl">
                            Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold">Contact</h1>
                        <div className="flex w-full flex-wrap gap-5 mt-10">
                            <a href="" className="p-2 border border-blue-400 text-blue-400 text-xl font-bold"><i className="fa-brands fa-twitter me-5"></i>Twitter.com/stripe</a>
                            <a href="" className="p-2 border border-blue-400 text-blue-400 text-xl font-bold"><i className="fa-brands fa-facebook me-5"></i>facebook.com/stripe</a>
                            <a href="" className="p-2 border border-blue-400 text-blue-400 text-xl font-bold"><i className="fa-brands fa-linkedin me-5"></i>linkedin.com/stripe</a>
                        </div>

                    </div>
                    <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                        <div className="col-span-1 md:col-span-2 lg:col-span-2">
                            <img src={ci1} alt="" className="w-full" />
                        </div>
                        <div className="col-span-1 grid grid-cols-1 items-between w-full h-full gap-10">
                            <img src={ci2} alt="" className="w-full" />
                            <img src={ci3} alt="" className="w-full" />
                            <img src={ci4} alt="" className="w-full border" />
                        </div>

                    </div>
                </div>
                {/* tech stack,office Location */}
                <div >
                    <div className="col-span-1 flex flex-col gap-10">
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold">Tech Stack</h1>
                        <p className='text-gray text-xl'>Learn about the technology and tools that Stripe uses</p>
                        <div className="grid w-full grid-cols-3 gap-5">
                            {
                                techStack.map((item) => (
                                    <div className="flex flex-col w-full justify-center items-center gap-5">
                                        <img className='w-20 h-20' src={item.img} alt="" />
                                        <h1 className="text-xl text-semibold text-gray">
                                            {item.tech}
                                        </h1>
                                    </div>
                                ))
                            }
                        </div>
                        <a href="" className="text-xl text-blue-400 font-bold">View Tech Stack  <i className='fa-solid fa-arrow-right'></i></a>
                        <div className="w-full border border-px border-gray"></div>

                    </div>
                    <div className='py-10 flex flex-col gap-10'>
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold">Office Location</h1>
                        <p className="text-xl text-gray">Stripe offices spread across 20 countries</p>
                    </div>
                </div>
            </section>
            <hr className="text-gray" />

        </>
    )
}

export default CompanyProfile