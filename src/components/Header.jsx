import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <div>
           <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
                  <Navbar.Brand className='text-success fs-4 fw-bold'>
                      <Link to='/' className='text-decoration-none text-success fs-4 fw-bold' > The Meal DB
                      </Link>
                  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
                              <Link to='/' className='text-decoration-none text-success fs-4 fw-light mx-3'>
                                  Home
                              </Link>
            
                          
                              <Link to= '/about' className='text-decoration-none text-success fs-4 fw-light mx-3'>About</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header