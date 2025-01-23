import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FindJobs from './pages/FindJobs'
import BrowseCompanies from './pages/BrowseCompanies'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/find-jobs' element={<FindJobs/>}></Route>
        <Route path='/browse-companies' element={<BrowseCompanies/>}></Route>
       
      </Routes>
    </>
  )
}

export default App
