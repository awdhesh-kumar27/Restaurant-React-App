import React from "react";
import Container from 'react-bootstrap/Container';
import { Nav ,Navbar,NavDropdown} from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import './SidebarUser.css';

const SidebarUser =() =>{

    return(
        <div className="sidebar">
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        {/* <NavLink className={'side-link'}  to="/">Home</NavLink> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  className="sidebar-collapse">
          <Nav className={'sidebar-btn'}>
            <NavLink className={'side-link'} to='/UserHome/Delivery'>Delivery</NavLink>
            <NavLink className={'side-link'} to='/UserHome/YourOrders'>Your Orders</NavLink>
            <NavLink className={'side-link'} to='/UserHome/OrderHistory'>Order History</NavLink>
            <NavLink className={'side-link'} to='/UserHome/UserProfile'>Profile</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
       </Navbar>
   
        </div>
    );
}

export default SidebarUser;