import React from 'react'
import companylogo3 from '../assets/logo3.svg'

const CompanyResults = () => {
  return (
    <div className='w-80 border h-80 border-gray flex flex-col items-center justify-center gap-5 bg-white'>
        <div className="w-2/6 h-2/6">
            <img className='w-full h-full' src={companylogo3} alt="" />
        </div>
        <h1 className="text-2xl font-bold">Web Flow</h1>
        <span className="p-3 bg-blue-100 text-blue-300 rounded-full">5 Jobs</span>
    </div>
  )
}

export default CompanyResults