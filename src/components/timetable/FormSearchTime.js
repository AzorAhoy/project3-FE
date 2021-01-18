import React, { Component } from 'react';
import AddTimetable from './AddTimetable';
import Timetable from './Timetable';

class FormSearchTime extends Component {
    render() {
        return (
            <div>
            <div class="card">
            <div class="card-body">
                <div className="row">
                  <div className="col-3">
                  <input type="email" className="form-control" id="email" placeholder="lớp" name="lop" />
                  </div>
                  <div className="col-3">
                  <input type="text" className="form-control" id="pwd" placeholder="khóa học" name="course" />
                  </div>
                  
                  <div className='col-3'>
                  <button type="submit" className="btn btn-primary">Tìm kiếm</button>
                  </div>
                  <div className='col-3'>
                  <AddTimetable/>
                  </div>
                </div> <br/>
                 <Timetable/>
            </div>
            </div>
        </div>
        );
    }
}

export default FormSearchTime;