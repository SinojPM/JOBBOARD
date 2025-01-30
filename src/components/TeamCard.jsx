import React from 'react'
import team1 from '../assets/team1.svg'

const TeamCard = () => {
  return (
    <div className='w-full flex flex-col items-center justify-evenly p-7 border border-gray gap-3'>
        <img src={team1} alt="member img" className="w-28 h-28 rounded-full" />
        <h1 className="text-xl text-black font-bold">Celestine Gardenier</h1>
        <h1 className="text-xl text-gray font-bold">CEO & Co-founder</h1>
        <div className="flex w-full justify-center text-xl text-gray items-center gap-5">
        <i className="fa-brands fa-instagram hover:text-blue-300 "></i>
        <i className="fa-brands fa-linkedin hover:text-blue-300"></i>
        </div>
    </div>
  )
}

export default TeamCard