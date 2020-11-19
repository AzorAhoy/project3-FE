import React, { Component } from 'react';
import { GrAdd } from "react-icons/gr";
import FormSearchTeacher from './FormSearchTeacher';
import ListTeachers from './ListTeachers';

class PageTeacher extends Component {
    render() {
        return (
           
                <>
                <div className="container">
                        <div>
                        <button type="button" className="btn btn-primary"> < GrAdd/> Thêm giáo viên </button>
                        </div><br/>
                    <div class="card bg-primary text-white">
                        <div class="card-body">DANH SÁCH GIÁO VIÊN</div>
                    </div>
                    <div>
                    <FormSearchTeacher>

                    </FormSearchTeacher>
                    <ListTeachers>

                    </ListTeachers>
                </div>

                </>
           
        );
    }
}

export default PageTeacher;