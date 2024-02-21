import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './App.css'


const NavComp = () => {
  return (
   <Navbar class="navbar navbar-expand-lg ">
  <Container>
    <a class="badge bg-success" href="https://www.guvi.in/"   >GUVI</a>
      <ul class="nav nav-underline">
  <li class="nav-item ">
    <Nav.Link as={NavLink} to="/" class="nav-link  " aria-current="page">All</Nav.Link>
  </li>
  <li class="nav-item">
    <Nav.Link as={NavLink} to="/FSD" class="nav-link ">Full Stack Development</Nav.Link>
   </li>
          
  <li class="nav-item">
    <Nav.Link as={NavLink} to="/DS">Data Science</Nav.Link>
  </li>
  <li class="nav-item">
     <Nav.Link as={NavLink} to="/CS">Cyber Security</Nav.Link>
  </li>
</ul>
    </Container>
</Navbar>      
  )
}

export default NavComp