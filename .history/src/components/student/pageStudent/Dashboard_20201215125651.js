import React, { Component } from 'react';
import FormStudent from './FormStudent';
import Student from './Student';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Student/>
                 <div className="container">
                
                <div class="card bg-primary text-white">
                    <div class="card-body">DANH SÁCH HỌC VIÊN</div>
                </div>
                  <FormStudent>
                      
                  </FormStudent>
                </div>
            </div>
        );
    }
}

export default Dashboard;