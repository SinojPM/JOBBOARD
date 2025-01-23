import { TextField } from '@mui/material'
import React from 'react'

const SearchBar = () => {
    return (
        <div className="shadow w-full px-5 md:px-10 lg:px-20 py-10 rounded mt-5 grid grid-cols-1 lg:grid-cols-10 gap-10 ">
            <div className="w-full col-span-4 flex justify-center gap-3 items-center">
                <i className="fa-solid fa-magnifying-glass text-2xl"></i>
                <TextField className='w-full flex-1' id="standard-basic" label="Job Title" variant="standard" />
            </div>
            <div className="w-full col-span-4 flex justify-center gap-3 items-center">
                <i className="fa-solid fa-location-dot text-2xl"></i>
                <TextField className='flex-1 w-full' id="standard-basic" label="Location" variant="standard" />
            </div>
            <button className="text-white bg-blue-400 p-5 rounded">
                Search
            </button>
        </div>
    )
}

export default SearchBar