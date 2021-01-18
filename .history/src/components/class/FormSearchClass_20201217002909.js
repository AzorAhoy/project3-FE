import React, { Component } from 'react';
import AddClass from './AddClass';
import ListClass from './ListClass';

class FormSearchClass extends Component {
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
                      <input type="text" className="form-control" id="role" placeholder="Vai trò" name="role" />
                      </div>
                      
                      <div className='col-3'>
                      <button type="submit" className="btn btn-primary">Tìm kiếm</button>
                      </div>
                      <div className='col-3'>
                       <AddClass/>
                      </div>
                    </div> <br/>
                     <ListClass/>
                </div>
                </div>
            </div>
        );
    }
}

export default FormSearchClass;