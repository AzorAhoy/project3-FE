import React, { Component } from 'react';
import { GrAdd } from "react-icons/gr";
import { FaBars } from 'react-icons/fa';
import Sidebar from 'react-sidebar';
import { withRouter } from 'react-router-dom';
import { Table } from 'react-table';
import NavbarForm from '../NavbarForm';
import Navbars from '../Navbars';
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
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ và tên</th>
                            <th>Ngày sinh</th>
                            <th>Địa chỉ</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Giới tính</th>
                            <th>Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Nguyễn Văn Nhật</td>
                            <td>23-10-1998</td>
                            <td>Hà Nội</td>
                            <td>0338014326</td>
                            <td>nhat.nv23101998@gmail.com</td>
                            <td>Nam</td>
                            <td> 
                              <button type="button" className="btn btn-info">xóa</button>
                              <button type="button" className="btn btn-warning">edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Nguyễn Văn Nhật</td>
                            <td>23-10-1998</td>
                            <td>Hà Nội</td>
                            <td>0338014326</td>
                            <td>nhat.nv23101998@gmail.com</td>
                            <td>Nam</td>
                            <td>
                            <button type="button" className="btn btn-info">xóa</button>
                            <button type="button" className="btn btn-warning">edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Nguyễn Văn Nhật</td>
                            <td>23-10-1998</td>
                            <td>Hà Nội</td>
                            <td>0338014326</td>
                            <td>nhat.nv23101998@gmail.com</td>
                            <td>Nam</td>
                            <td>
                            <button type="button" className="btn btn-info">xóa</button>
                            <button type="button" className="btn btn-warning">edit</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    
                    </div>
                </div>
               </div>

          </>
        );
    }
}

