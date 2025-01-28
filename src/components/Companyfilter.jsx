import React from 'react'
import { Checkbox} from '@mui/material'
import classNames from 'classnames'

const Companyfilter = () => {
  return (
    <div className={classNames('w-1/5  flex flex-col py-20 hidden md:block lg:block')}>
                <div className='flex flex-col'>
                    <h1 className="text-xl text-blue-300">Type Of Employment</h1>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Full-Time (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Part-time (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Remote (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Internship (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Contract (0)</div>
                    </label>
                </div>
                <div className='flex flex-col mt-10'>
                    <h1 className="text-xl text-blue-300">Categories</h1>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Design (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Sales (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Marketing (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Buisiness (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Human Resource (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Finance (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Engineering (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Technology (0)</div>
                    </label>
                </div>
                <div className='flex flex-col mt-10'>
                    <h1 className="text-xl text-blue-300">Job Level</h1>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Entry Level (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Mid-level (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Senior Level (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Director (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Other (0)</div>
                    </label>
                </div>
                <div className='flex flex-col mt-10'>
                    <h1 className="text-xl text-blue-300">Salary Range</h1>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Below 10000 rs (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>10000-20000 (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>20000-40000 (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>40000-100000 (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Above 1L</div>
                    </label>
                </div>
            </div>
  )
}

export default Companyfilter