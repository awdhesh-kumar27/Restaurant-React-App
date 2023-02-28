import React from "react";
import Container from 'react-bootstrap/Container';
import { Nav ,Navbar,NavDropdown} from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import './NavigationBar.css';
import { useFirebase } from "../../Components/UserContext/Context";
import {useNavigate} from "react-router-dom";

const NavigationBar = ()=>{

    const firebase = useFirebase();
    const navigate = useNavigate();
    const currentUser = firebase.user;
    const logoutHandler = () =>{
      firebase.userLogout();
  }

    return(
    <div >
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink className={'nav-link'}  to="/">Home</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavLink className={'nav-link'} to='/about'>About</NavLink>
            <NavLink className={'nav-link'}  to='/contactUs'>Contact Us</NavLink>
          </Nav>
          {
          currentUser ? (
              <Nav>
                  <NavLink style={{margin:'10px'}} >{currentUser.email}</NavLink>
                 <NavLink style={{margin:'10px'}} to="/SignIn"><span onClick={logoutHandler}>LogOut</span></NavLink>
              </Nav>

          ):(
            <Nav>
            <NavLink className={'nav-link'} to='/SignIn'>Login</NavLink>
            <NavLink className={'nav-link'} to='/SignUp/User'>Register</NavLink>
            
            </Nav>
          )
        }
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
export default NavigationBar;