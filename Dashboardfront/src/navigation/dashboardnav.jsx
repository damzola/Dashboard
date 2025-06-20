import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {Circle, Person, Receipt, Gear} from 'react-bootstrap-icons'

export default function dashboardnav() {
  return (
    <div>
         <div className=' containe p-3' style={{ height: "100vh", backgroundColor: "#efede1"}}>                          
    <div className="d-block d-flex bg-white shadow-lg rounded-start-4">
      {/* Sidebar (Visible on lg and up) */}
      <div
        className="shadow-lg p-3 position-sticky top-0 vh-100  overflow-y-auto z-50 rounded-start-4"
        style={{ width: "20%", height: "100vh", backgroundColor: "#008080"}}
      >
        
          {/* <Logo/> */}
          <h5 className='text-light fw-bolder text-decoration-underline text-center '>Admin Dash</h5>
        
        <ul className="list-unstyled p-2">
          <li className="mb-3 d-flex gap-2">
            <Circle size={18} color='white' className='bg-light rounded-pill'/>
            <Link className=" text-decoration-none text-light fw-bold" as={Link} to="/dashboard">
           Dashboard
            </Link>
            
          </li>
          <li className="mb-3 d-flex gap-2">
            < Person size={18} color='white'/>
            <Link className=" text-decoration-none text-light fw-bold" as={Link} to="/user">
            Users
            </Link>            
          </li>

          <li className="mb-3 d-flex gap-2">
            <Receipt size={18} color='white'/>
          <Link className=" text-decoration-none text-light fw-bold " as={Link} to="/report">
            Reports
            </Link>            
          </li>
           <li className="mb-3 d-flex gap-2">
            <Gear size={18} color='white'/>
          <Link className=" text-decoration-none text-light fw-bold " as={Link} to="/setting">
             Setting
            </Link>            
          </li>
        
         
        </ul>
      </div>
      {/* Main content */}
      
        {/* Actual page content */}
        <div style={{width: "80%"}} className=' position-relative justify-content-center align-items-center text-center '>
          {/* <p className=" text-center d-lg-none alert alert-danger ">Admin panel show better on a bigger screens!</p> */}
          <main>
            <Outlet/>
          </main>
            
       
      </div>
    </div> 
    
    </div>
      
    </div>
  )
}
