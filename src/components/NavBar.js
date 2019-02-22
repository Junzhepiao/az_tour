import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (

        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">AZ TOUR</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/stories/">Stories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/mystory">My Story</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>

    );
  }
}