import React, { Component } from 'react';
import HomePage from '../HomePage';
import FormSearchTime from './FormSearchTime';
class Pagetimetable extends Component {
    render() {
        return (
            
            <>
            <HomePage/>
            <div className="container">
                    
                <div class="card bg-primary text-white">
                    <div class="card-body">DANH SÁCH GIÁO VIÊN</div>
                </div>
                <div>
                <FormSearchTime/> 
                
                </div>
            </div>

            </>
       
        );
    }
}

export default Pagetimetable;