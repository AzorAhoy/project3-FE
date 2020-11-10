import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import { Table } from 'react-table';
import NavbarForm from '../NavbarForm';
import Navbars from '../Navbars';
export default class ListTeachers extends Component {


    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div style={{ float: "left" }}>  <Navbars /></div>
                <div>
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <FaBars style={{ width: "20px" }}
                            onClick={() => this.onSetSidebarOpen(true)} />
                        <NavbarForm />

                    </nav>
                    aaaaaaaaaaaaaaaaaa

                    </div>
                {/* <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table> */}
            </div>
        );
    }
}

