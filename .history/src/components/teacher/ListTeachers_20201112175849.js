import React, { Component } from 'react';
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
           <button type="button" className="btn btn-primary">THÊM HỌC VIÊN</button>
              

             
              <div class="card bg-primary text-white">
                  <div class="card-body">Danh sách học sinh</div>
              </div>
          
              <div class="card">
               <div class="card-body">
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
                        </tbody>
                    </table>
                    
                    </div>
                </div>
               </div>

          </>
        );
    }
}

