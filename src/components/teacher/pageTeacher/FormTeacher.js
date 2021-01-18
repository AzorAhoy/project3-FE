import React, { Component } from 'react';
import Listteacher from './Listteacher';

class FormTeacher extends Component {
    render() {
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
                      <div className='col-3'>
                      
                      </div>
                    </div> <br/>
                    <Listteacher/>
                </div>
                </div>
            </div>
        );
    }
}

export default FormTeacher;