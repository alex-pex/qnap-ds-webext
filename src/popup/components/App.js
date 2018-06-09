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

const App = ({ tasks }) => {
  console.log(tasks);
  return (
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
      <Table className="no-margin-bottom">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Source/Name</th>
            <th scope="col">Progress</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.hash || index}>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>{task.source_name}</td>
              <td>
                <Progress value={task.progress} animated={task.activity_time > 0} />
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
};

const TaskType = PropTypes.shape({
  source_name: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
});

App.propTypes = {
  tasks: PropTypes.arrayOf(TaskType).isRequired,
};

const mapStateToProps = state => ({
  tasks: state.tasks.data,
});

export default connect(mapStateToProps)(App);
