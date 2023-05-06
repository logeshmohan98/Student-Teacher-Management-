import React from 'react'
import { Outlet,Link } from 'react-router-dom'
export default function Index() {
    return (
        <div> 
            <div className='zen-header' id='zen-header'>
                <h4>student journey</h4>
            
            <div className='zen-sub-journey-container'  >
            <Link to='/student/create'>
            <p className='zen-sub-journey-link'>createstudent</p>
            </Link>
            <Link to='/student/manage'>
                <p className='zen-sub-journey-link'>managestudent</p>
            </Link>
            </div>
            </div>
            <Outlet />
        </div>
        
    )
} 