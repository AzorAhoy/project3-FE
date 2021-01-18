import React, { Component } from 'react';
import ListStudents from './ListStudents';
import ListItemStudent from './ListItemStudent';
class FormSearchStudent extends Component {
    render() {
        var students = [];
        return (
            <>
            <div class="card">
            <div class="card-body">
                 <div className="row">
                   <div className="col-3">
                   <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                   </div>
                   <div className="col-3">
                   <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"  />
                   </div>
                   <div className='col-3'>
                   <button type="submit" className="btn btn-primary">Tìm kiếm</button>
                   </div>
                 </div> <br/>
                  <ListStudents>
                     {this.showStudent(students)}
                  </ListStudents>
                 </div>
             </div>
             </>
        );
    }
    showStudent(students){
        var result = null;
        if(students.length > 0){
           result=students.map((student, index ) =>{
                return(
                    <ListItemStudent 
                    key={index}
                    student={teacher}
                    index={index}
                    />
                );

           });
        }
        return result;
    }
}

export default FormSearchStudent;