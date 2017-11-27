import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import logo from '../../images/logo.png'

import {logout} from '../../api/api'

class NavBar extends Component {
    logout(e){
        e.preventDefault();
        logout().then(json => {
            console.log(json);
            sessionStorage.removeItem('loggedIn');
            sessionStorage.removeItem('userType');    
            sessionStorage.removeItem('userID');                        
            window.location.href = "home";            
	    }).catch(err => {
            console.log(err);
		  });
    }
    render(){
        return (
            <Navbar className="navbar navbar-default navbar-static-top">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/home"><img src={logo} className="logo"/></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse id="navbar">
              <Nav pullRight>
                <NavItem eventKey={1} href="/home">Home</NavItem>
                <NavDropdown eventKey={2} title="Search" id="basic-nav-dropdown">
                  <MenuItem eventKey={2.1} href="/searchcaregiver">Caregivers</MenuItem>
                  <MenuItem eventKey={2.2} href="/searchjob">Jobs</MenuItem>
                </NavDropdown>
                <NavItem eventKey={3} href="/medicalexperts">Medical Experts</NavItem>
                <NavItem eventKey={4} href="/forum">Forum</NavItem>
                {
                    sessionStorage.getItem("loggedIn") && <NavItem eventKey={5} href="/dashboard">Dashboard</NavItem>
                }
                <NavItem eventKey={5} href={sessionStorage.getItem("loggedIn") ? "/" : "/login"} onClick={e => sessionStorage.getItem("loggedIn") && this.logout(e)}>{sessionStorage.getItem("loggedIn") ? "Log Out" : "Sign Up/Login"}</NavItem>
                <NavDropdown eventKey={5} title={<span><i className="fa fa-globe" aria-hidden="true"></i> English</span>} id="basic-nav-dropdown">
                  <MenuItem eventKey={5.1}>English</MenuItem>
                  <MenuItem eventKey={5.2}>中文</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default NavBar;