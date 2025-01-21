import React from 'react'

const Category = ({type}) => {
  return (
    <>
        <button className='p-2 border bg-green-200 text-green-100 rounded-full mt-2' disabled>{type}</button>
    </>
  )
}

export default Category