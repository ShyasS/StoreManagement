import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
     <div>
      <Sidebar/>
        <nav className="navbar navbar-expand-sm col-md-10 navbar-dark bg-primary" style={{marginTop:'-100vh',marginLeft:'253px'}}>
            <i className="navbar-brand bi bi-justify-left" ></i>
                 <h1 style={{color:'white'}}>Store Management</h1>
            <div className="collapse navbar-collapse  " >
            <ul class="navbar-nav mt-2 mt-lg-0"></ul>
            <div class="dropdown open my-2 my-sm-0" style={{marginLeft:'85%'}}>
          <a class="text-decoration-none text-white dropdown-toggle  p-2 fs-5" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              <FontAwesomeIcon icon={faUserCircle} /><span  className='ms-2 d-none d-sm-inline'>Admin</span>
              </a>
          <div class="dropdown-menu me-auto" aria-labelledby="triggerId">
            <Link style={{textDecoration:'none',color:'white'}}  to={'/'}><a class="dropdown-item">Logout</a></Link>
            <a class="dropdown-item " href="#">Settings</a>
          </div>
        </div>    
            </div>
        </nav>
</div>
  );
}

export default MainPage;
