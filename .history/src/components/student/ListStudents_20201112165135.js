import React, { Component } from 'react';

class ListStudents extends Component {
    render() {
        return (
            <div>
               <div className="panel panel-default">
                <div className="panel-heading">Panel Heading</div>
                <div className="panel-body">Panel Content
                <div className="container">
                            
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

                </div>
               </div>

            </div>
        );
    }
}

export default ListStudents;