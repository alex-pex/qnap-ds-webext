import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
  Table,
  UncontrolledDropdown,
} from 'reactstrap';

import TaskProgress from './TaskProgress';

const App = ({ tasks, domain }) => (
  <Fragment>
    <Navbar fixed="top" color="success" dark>
      <a
        className="navbar-brand"
        href={`${domain}/downloadstation/`}
        onClick={event => {
          event.preventDefault();
          chrome.tabs.create({ url: `${domain}/downloadstation/` });
        }}
      >
        <strong>Download</strong>Station Companion
      </a>
      <Button color="success" size="sm">
        <i className="material-icons">settings</i>
      </Button>
    </Navbar>
    <Table
      className="no-margin-bottom"
      style={{ tableLayout: 'fixed', marginBottom: 100, marginTop: 50 }}
    >
      <thead className="thead-light">
        <tr>
          <th scope="col">Source/Name</th>
          <th scope="col" style={{ width: 61 }}>
            #
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.length ? (
          tasks.map((task, index) => (
            <tr key={task.hash || index}>
              <td className="text-truncate">
                <div style={{ marginBottom: 5 }}>{task.source_name || task.source}</div>
                <TaskProgress task={task} />
              </td>
              <td style={{ verticalAlign: 'middle' }}>
                <UncontrolledDropdown direction="left">
                  <DropdownToggle color="secondary">
                    <i className="material-icons">list</i>
                  </DropdownToggle>
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
          ))
        ) : (
          <tr>
            <td colSpan={3} className="text-center">
              Aucune tâche en cours
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  </Fragment>
);

const TaskType = PropTypes.shape({
  source_name: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
});

App.propTypes = {
  tasks: PropTypes.arrayOf(TaskType).isRequired,
};

const mapStateToProps = state => ({
  tasks: state.tasks.data,
  domain: state.settings.domain,
});

export default connect(mapStateToProps)(App);
