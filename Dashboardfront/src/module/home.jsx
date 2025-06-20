import React from 'react'
import { Link } from 'react-router-dom'

export default function home() {
  return (
    <div className='module-home '>
    <div className='shadow-lg p-5 '>
      <h1 className=' text-center fw-bolder p-3'>View Dashboard</h1>
      <Link to="/dashboard">
       <button className=' btn btn-primary btn-sm w-100'>View Page Performance Record</button>
      </Link>
     
    </div>
    </div>
  )
}
