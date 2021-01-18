import React, { Component } from 'react';
import { GrAdd } from "react-icons/gr";
import HomePage from '../HomePage';
import FormSearchTeacher from './FormSearchTeacher';


class PageTeacher extends Component {
    render() {
        return (
           
                <>
                <HomePage/>
                <div className="container">
                        
                    <div class="card bg-primary text-white">
                        <div class="card-body">DANH SÁCH GIÁO VIÊN</div>
                    </div>
                    <div>
                    <FormSearchTeacher>

                    </FormSearchTeacher>
                    
                    </div>
                </div>

                </>
           
        );
    }
}

export default PageTeacher;