import React from "react";
import Container from 'react-bootstrap/Container';
import { Nav ,Navbar,NavDropdown} from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import './SidebarRest.css';

const SidebarRest = ()=>{


    return (
        <div className="sidebar">
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  className="sidebar-collapse">
            <Nav className={'sidebar-btn'}>
            <NavLink className={'side-link'} to='/RestaurantHome/AddDish'>Add Dish</NavLink>
              <NavLink className={'side-link'} to='/RestaurantHome/ActiveDish'>Active Dishes</NavLink>
              <NavLink className={'side-link'} to='/RestaurantHome/ActiveOrder'>Active Orders</NavLink>
              <NavLink className={'side-link'} to='/RestaurantHome/PastOrder'>Order History</NavLink>
              <NavLink className={'side-link'} to='/RestaurantHome/RestProfile'>Profile</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
         </Navbar>
     
          </div>
    );
}

export default SidebarRest;