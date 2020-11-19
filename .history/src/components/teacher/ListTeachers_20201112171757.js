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
             <div className="panel panel-primary">
                {/* <div className="panel-heading">Panel Heading</div> */}
                   <div className="panel-body">Panel Content
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
                            <th>Tình trạng</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Nguyễn Văn Nhật</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
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

