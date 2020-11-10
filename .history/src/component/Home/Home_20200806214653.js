import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
            
            <div className="container-fluid">
                <div className="row">
                <div className="col-sm-3 bg-dark">
                   
                   <ul className="navbar-nav">
                        <a classname="navbar-brand" href="#">
                         <img src="image/02.png" alt="Logo" style={{width: '250px', height:'80px'}} />
                         <i className="fa fa-angle-double-left"></i>
                        </a>
                        <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-home"></i>  &nbsp; Dashboard</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-user"></i> &nbsp; Phân quyền</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-users"></i>  &nbsp;Nhà phân phối</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">  <i className="fa fa-users"></i> &nbsp; Đơn hàng</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-home"></i> Dùng thử</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-home"></i> Quản lý key</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-users"></i> &nbsp; Yêu cầu đổi key cấp dưới</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-users"></i> &nbsp; quản lý mã giám giá</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"> <i className="fa fa-users"></i> &nbsp; Báo cáo</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-users"></i> &nbsp; Công cụ</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa fa-users"></i> &nbsp; Quản lý thông báo</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-9 bg-light">
                    <p> Hi, admin </p>
                </div>
                </div>
            </div>
            </div>

        );  
    }
}

export default Home;