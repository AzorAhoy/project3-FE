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
                         <img src="image/02.png" alt="Logo" style={{width: '250px', height:'100px'}} />
                        </a>
                        <li className="nav-item">
                        <i className="fa fa-home"></i>
                        <a className="nav-link" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Phân quyền</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Nhà phân phối</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Đơn hàng</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Dùng thử</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Quản lý key</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Yêu cầu đổi key cấp dưới</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">quản lý mã giám giá</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Báo cáo</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Công cụ</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Quản lý thông báo</a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-9 bg-light">
                    
                </div>
                </div>
            </div>
            </div>

        );  
    }
}

export default Home;