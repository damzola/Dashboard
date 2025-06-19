import React from 'react'

export default function dashboard() {
  return (
    <div className=' container text-center'>
      <h1>Here is the dashboard page</h1>
      <div className=' d-flex gap-5 overflow-x-scroll justify-content-center w-100 h-100'>
        <span className='bg-primary p-4 shadow'>
          My one
        </span>
         <span className='bg-primary p-4 shadow'>
          My one
        </span>
         <span className='bg-primary p-4 shadow'>
          My one
        </span>
         <span className='bg-primary p-4 shadow'>
          My one
        </span>
      </div>
    </div>
  )
}
