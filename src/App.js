
import React from 'react';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import Createstudent from './journey/student journey/createstudent';
import Managestudent from './journey/student journey/managestudent';
import Studentjournry from './journey/student journey/index';

function App() {
  return (
    <div id='zen-landing-page' className='app-containers'>
   
    <div className='zen-contect-area-container'  id='zen-contect-area-container'>
    <div className='zen-sidebar'>
    <div className='sidebar-header-branding' >
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEB3p4MfwwZBtNzxmpuWNmWkXiPvrMw60XU0gbk6bONA&s' className='brand-logo' alt='zen-class-logo'/> 
    
    zen classes
        </div>
      
       
        <nav className='zen-sidebar-nav'>
          <ul>
            <li>
              <Link to='/student'>Studentjournry</Link>
            </li>
            <li> Createstudent</li>
            <li> Managestudent</li>
          </ul>
        </nav>
      </div>
      <div className='zen-contect-area' id='zen-contect-area'>
        <Routes>
          <Route path='student' Component={Studentjournry} >
          <Route path='create' Component={Createstudent} />
          <Route path='manage' Component={Managestudent} />
          </Route>
          
        </Routes>
        </div>
    </div>
    
    </div>

  );
}

export default App;
