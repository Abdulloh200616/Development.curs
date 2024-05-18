import React, { useEffect, useState } from 'react'
import logo from '../img/Group.png'
import { Link } from 'react-router-dom';




// import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Navbar() {
  

  return (
   <Container>
      <Row>
      
        <header>
          <img className='navbar-img'  src={logo}/>
       
        <div className='search-box'>
          <form action="">
           <input type="text" name='search' id="srch" placeholder='Search'></input>
            <button type="submit" ><i className='fa fa-search'></i></button>
          </form>
        </div>
        <ul className=" navbar-nav border-10">
        <div class="dropdown">
          <button class=" btn-primary dropdown-toggle" type="button" id="ddv" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </button>
          <ul class="dropdown-menu" aria-labelledby="ddv">
            <li><Link className="dropdown-item active"  aria-current='page' to='/'>Home</Link></li>
            <li><Link className="dropdown-item"to='/account'>Account</Link></li>
            <li><Link className="dropdown-item" to='/courses'>Courses</Link></li>
            <li><Link className="dropdown-item" to='/detail'>Detail</Link> </li>
            <li><Link className="dropdown-item" to='/blog'>Blog</Link></li>
          </ul>
        </div>
      </ul>
        <Link to="/blog" className='link-mentor' >Become an Mentor</Link>
        <div className='btn-grup'>
          <Link to='/signup'>
            <button className='btn-1' >Login</button>
          </Link>
          <Link to='/signup'>
            <button className='btn-2' > Sign in</button>
          </Link>
        </div>
        </header>     
      </Row>
   </Container>
   
   
      
      
  )
}

export default Navbar