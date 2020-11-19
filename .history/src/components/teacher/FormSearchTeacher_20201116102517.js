import React, { Component } from 'react';
import ListTeachers from './ListTeachers';

class FormSearchTeacher extends Component {
    render() {
        var teachers =[];
        return (
            <div>
                <div class="card">
                <div class="card-body">
                    <div className="row">
                      <div className="col-3">
                      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                      </div>
                      <div className="col-3">
                      <input type="text" className="form-control" id="pwd" placeholder="Họ và tên" name="pswd" />
                      </div>
                      
                      <div className='col-3'>
                      <button type="submit" className="btn btn-primary">Tìm kiếm</button>
                      </div>
                    </div> <br/>
                    <ListTeachers>
                       {this.showTeachers(teachers)} 
                    </ListTeachers>
                </div>
                </div>
            </div>
        );
    }
    showTeachers(teachers){
        var result = null;
        if(teachers.length > 0){
           result=teachers.map((teacher, index ) =>{
                return(
                    <List
                    key={index}
                    teacher={teacher}
                    index={index}
                    />
                );

           });
        }
        return result;
    }
}

export default FormSearchTeacher;