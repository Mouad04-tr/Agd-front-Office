import React from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bmce from '../../../assets/bmce-logo.png'
import './NavigationBar.css'

function NavigationBar() {


    return(
      <>
     <Navbar className="bg-body-tertiary nav-style1">
        <Container>
          <Navbar.Brand>
            <Link className="logo-style" to="/">
              <img src={bmce} className="d-inline-block align-top" alt='logo bmce' /> 
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end navbar-nav1">
          <Nav.Link className='nav-item1'>
            <Link className="nav-link active nav-lien1" aria-current="page" to="/contact"><span className='nav-lien'>Contact</span></Link>
          </Nav.Link>
          <Nav.Link className='nav-item2'>
            <Link className="nav-link active nav-lien2" aria-current="page" to="/Ma-demande"><span className='nav-lien3'>Ma demande</span></Link>
          </Nav.Link>
        </Navbar.Collapse>
        </Container>
    </Navbar>
      </>
    )
}
export default NavigationBar


