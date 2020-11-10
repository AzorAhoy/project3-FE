import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            widthNav: '250px'
        });
        this.closeNav = this.closeNav.bind(this);
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    closeNav() {
        console.log('vaoooooooooooo')
        console.log('111111111111', this.state)

        this.setState({
            widthNav: '0px'
        })
        // document.getElementById("mySidenav").style.width = "0px";
    }
    render() {
        let { widthNav } = this.state;
        return (

            <div className="container-fluid" >
                <div className="row">
                    <div className="col-sm-3 bg-dark" id="mySidenav">

                        <ul className="navbar-nav">
                            <a classname="navbar-brand" href="#" onClick={this.closeNav}>
                                <img src="image/02.png" alt="Logo" style={{ width: widthNav, height: '80px' }} />
                                <span><i className="fa fa-angle-double-left"></i></span>
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
                                <a className="nav-link" href="#"> <i className="fa fa-user-md"></i>&nbsp; Dùng thử</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-bars"></i>&nbsp; Quản lý key</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> <i className="fa fa-retweet"></i> &nbsp; Yêu cầu đổi key cấp dưới</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> <i className="fa fa-users"></i> &nbsp; quản lý mã giám giá</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> <i className="fa fa-outdent"></i> &nbsp; Báo cáo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-qrcode"></i> &nbsp; Công cụ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-bell"></i> &nbsp; Quản lý thông báo</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-9 bg-white">
                        <div className="admin" id="admin">
                            <div className="ad">
                                <p> Hi, admin </p>
                                <img src="image/01.JPG" alt="" style={{ width: '30px', height: '30px' }} />
                            </div>
                        </div>
                        <div className="content" id="content">



                        </div>
                    </div>
                </div>
                <i className="fa fa-angle-double-right" onclick="closeSidenav()"></i>
            </div>



        );
    }
}

export default Home;