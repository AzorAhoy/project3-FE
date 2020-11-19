import React, { Component } from 'react';
import { GrAdd } from "react-icons/gr";
export default class ListTeachers extends Component {
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
                    
                    
                  </div>
                </div>
               </div>

          </>
        );
    }
}

