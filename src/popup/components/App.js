import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Progress,
  Table,
  UncontrolledDropdown,
} from 'reactstrap';

const App = ({ links }) => (
  <Fragment>
    <Navbar color="success" dark>
      <NavbarBrand href="/">
        <strong>Download</strong>Station Companion
      </NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
    <Table small className="no-margin-bottom">
      <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Source/Name</th>
          <th scope="col">Progress</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <input type="checkbox" />
          </th>
          <td>Mass Effect - Andromeda [FitGirl Repack]</td>
          <td>
            <Progress animated value={100} color="info">
              Seeding...
            </Progress>
          </td>
          <td>
            <UncontrolledDropdown direction="left">
              <DropdownToggle caret>Dropdown</DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </td>
        </tr>
        {links.map(url => (
          <tr key={url}>
            <th scope="row">
              <input type="checkbox" />
            </th>
            <td>{url}</td>
            <td>
              <Progress value={50} />
            </td>
            <td>
              <UncontrolledDropdown direction="left">
                <DropdownToggle caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Fragment>
);

App.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  links: state.links,
});

export default connect(mapStateToProps)(App);
