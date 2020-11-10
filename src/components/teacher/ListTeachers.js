import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Table } from 'react-table';
import Navbars from '../Navbars';
export default class ListTeachers extends Component {


    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
              <div style={{float:"left"}}>  <Navbars /></div>
                <div>
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

