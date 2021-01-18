import React, { Component } from 'react';
import ListUser from './ListUser';

class FormSearchUser extends Component {
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
                    </div> <br/>
                    <ListUser/>
                </div>
                </div>
            </div>
        );
    }
}

export default FormSearchUser;