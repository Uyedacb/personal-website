import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleNavOptions = () => {
    this.setState((currentState) => {
      return {collapsed: !currentState.collapsed}
    });
  }

  render() {
    let navbar = (
    <Navbar fixed="top" className="customNavbar" color="light" expand="md" sticky={'top'}>
      <NavItem id="brand">
        <NavLink to="/" className="mr-auto navbar-brand nav-custom-brand" >Brian Uyeda</NavLink>
      </NavItem>
      <NavbarToggler onClick={this.toggleNavOptions} cssClass={"navbarToggle"}/>
      <Collapse isOpen={!this.state.collapsed} navbar>
        <Nav className="ml-auto mr-1" navbar>
          <NavItem>
            <NavLink to="/about" className="nav-link">about</NavLink>
          </NavItem>
          <NavItem>
            <a href="files/Uyeda_Resume_SDE.pdf" target="_blank" className="nav-link">resume</a>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    );
    return navbar;
  }
}
