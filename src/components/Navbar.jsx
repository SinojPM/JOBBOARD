import React, { useEffect, useState } from 'react'
import logo from "../assets/Logo.svg"
import { Link, useNavigate } from 'react-router-dom'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'




const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const toggleDrawer = () => {
        setOpen(!open)
    }
    return (
        <>
            <div className='flex justify-between items-center w-full h-28'>
                <div className='flex gap-10'>
                    <div onClick={toggleDrawer} className="flex lg:hidden justify-center items-center">
                        <i className="fa-solid fa-bars text-gray"></i>
                    </div>
                    <img onClick={()=>navigate('/')} src={logo} alt="Logo" width={"200px"} />
                    <div className='hidden lg:flex items-center '>
                        <ul className='text-gray flex gap-5 h-5/5 items-center'>
                            <li><Link to={'/find-jobs'} className='hover:text-blue-300'>Find Jobs</Link></li>
                            <li><Link to={'/browse-companies'} className='hover:text-blue-300'>Browse Companies</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="hidden lg:flex gap-3 items-center h-full">
                    <Link className='text-blue-400 text-xl font-bold'>Login</Link>
                    <div className="w-1 border-gray h-2/6 bg-gray">
                    </div>
                    <button className='h-2/6 w-28 bg-blue-400 '>Sign Up</button>
                </div>
            </div>
            <Drawer open={open} onClose={toggleDrawer}>
                <div className=' w-80 h-screen d-flex flex-col items-between py-12 px-5 justify-center'>
                    <img src={logo} alt="Logo" width={"200px"} />
                    <div className="w-full flex flex-col gap-10 my-5 justify-between mt-12">
                        <div className="flex w-full flex-col gap-5 items-center">
                            <div className="p-5 bg-green-200 hover:bg-blue-400 w-full text-center text-xl rounded-full text-green-100 hover:text-white ">
                                Find jobs</div>
                            <div className="p-5 bg-green-200 w-full text-center text-xl rounded-full text-green-100 ">
                                Browse Companies</div>
                        </div>
                        <div className="flex flex-col g-10 items-center">
                            <div className="flex gap-3 items-center">
                                <Link className='text-blue-400 text-xl font-bold'>Login</Link>
                                <div className="w-1 border-gray h-full bg-gray">
                                </div>
                                <Link className='text-blue-400 text-xl font-bold'>Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default Navbar