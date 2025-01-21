import React from 'react'
import logo from "../assets/Logo2.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='px-5 lg:px-28 py-8 bg-dark w-full text-white'>
            <div className='grid grid-cols-2 lg:grid-cols-6 w-full gap-10 mb-5'>
                <div className="col-span-2 flex flex-col gap-10">
                    <img src={logo} alt="Logo" width={"200px"} />
                    <p className='text-justify'>
                        Great platform for the job seeker that <br /> passionate about startups.Find your dream job easier.
                    </p>
                </div>
                <div className="flex flex-col">
                    <h1 className='text-xl font-bold mb-5'>About</h1>
                    <ul className='flex flex-col gap-5'>
                        <li><Link>Companies</Link></li>
                        <li><Link>Pricing</Link></li>
                        <li><Link>Terms</Link></li>
                        <li><Link>Advice</Link></li>
                        <li><Link>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h1 className='text-xl font-bold mb-5'>Resources</h1>
                    <ul className='flex flex-col gap-5'>
                        <li><Link>Help Docs</Link></li>
                        <li><Link>Guide</Link></li>
                        <li><Link>Updates</Link></li>
                        <li><Link>Contact us</Link></li>

                    </ul>
                </div>
                <div className="col-span-2">
                    <h1 className='text-xl font-bold mb-5'>Get Job Notifications</h1>
                    <p>The latest job news, articles, sent to your inbox weekly.</p>
                    <div className="mt-5 flex w-full justify-start">
                        <input className='w-4/6 h-12 rounded-full text-dark px-5' placeholder='Email' type="text" />
                        <button className='rounded-full w-2/6 bg-blue-400 h-12 '>subscribe</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="py-5 flex flex-col lg:flex-row justify-between w-full items-center">
                <p className="text-gray">2021 @ JobHuntly. All rights reserved</p>
                <div className="flex gap-10 text-3xl">
                   <a  href=""><i className="fa-brands fa-facebook"></i></a>
                   <a href=""><i className="fa-brands fa-instagram"></i></a>
                   <a href=""><i className="fa-brands fa-linkedin"></i></a>
                   <a href=""><i className="fa-brands fa-x-twitter"></i></a>

                </div>
            </div>
        </footer>
    )
}

export default Footer