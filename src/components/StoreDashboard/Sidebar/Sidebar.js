import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faTarp } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.js';


const Sidebar = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
      <div className='col col-md-2 min-vh-100' style={{backgroundColor:'darkblue'}}>  
      <div>
      <a className='text-decoration-none text-white  d-flex align-itemcenter ms-3 mt-3 mt-sm-0'>
         <span className='ms-1 fs-4 d-none d-sm-inline'>Store Details</span>
         </a>
         <hr className='text-info '/>
         <ul class="nav nav-pills flex-column">
        <li class="nav-item text-white fs-5 my-1 mt-3 py-2 py-sm-0">
          <Link style={{textDecoration:'none',color:'white'}} to={'/Dashboard'}><a class="nav-link text-white fs-4" aria-current="page">
          <FontAwesomeIcon icon={faHouseUser} />
          <span className='ms-2 fs-5 d-none d-sm-inline'>Dashboard</span>
          </a>
          </Link>
        </li>

        <li class="nav-item text-white fs-5 py-2 py-sm-0">
          <Link to={'/ProdCard'}class="nav-link text-white my-2 fs-4" aria-current="page">
          <FontAwesomeIcon icon={faTarp} />
          <span className='ms-2 fs-5 d-none d-sm-inline'>Products</span>
          </Link>
        </li>

        <li class="nav-item text-white fs-5 py-2 py-sm-0">
          <a href="#" class="nav-link text-white my-2 fs-4" aria-current="page">
          <FontAwesomeIcon icon={faCartShopping} />
          <span className='ms-2 fs-5  d-none d-sm-inline'>Orders</span>
          </a>
        </li>

        <li class="nav-item text-white fs-5 py-2 py-sm-0">
          <a href="#" class="nav-link text-white my-2 fs-4" aria-current="page">
          <FontAwesomeIcon icon={faUsers} />
          <span className='ms-2 fs-5  d-none d-sm-inline'>Customers</span>
          </a>
        </li>
        </ul>
       </div>
 
        </div>
      </div>
</div>

  );
}

export default Sidebar;
