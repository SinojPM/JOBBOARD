import React from 'react'
import { Checkbox} from '@mui/material'
import classNames from 'classnames'

const Companyfilter = () => {
  return (
    <div className={classNames('w-full md:w-1/5 lg:w-1/5 grid grid-cols-2 md:flex lg:flex flex-row md:flex-col lg:flex-col py-20')}>
                <div className='flex flex-col'>
                    <h1 className="text-xl text-blue-300">Industry</h1>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Advertising (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Buisiness Service (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Blockchain (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>cloud (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Consumer Tech (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Education (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Fintech (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Gaming (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Food & Beverages (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>HealthCare (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Hosting (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>Media (0)</div>
                    </label>
                </div>
                <div className='flex flex-col mt-0 md:mt-10 lg:mt-10'>
                    <h1 className="text-xl text-blue-300">Company Size</h1>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>1-50 (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>51-150 (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>151-250 (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>251-500 (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>501-1000 (0)</div>
                    </label>
                    <label className='flex items-center'><Checkbox />
                        <div className='text-xl text-gray'>1000 or above (0)</div>
                    </label>
                </div>
            </div>
  )
}

export default Companyfilter