import React, { Component } from 'react';
// import Navbars from '../Navbars';
import AddModal from './AddModal';
import FormSearchUser from './FormSearchUser';
//import Sidebar from 'react-sidebar';
import { FaBars } from 'react-icons/fa';
import NavbarForm from '../NavbarForm';

class PageUser extends Component {
    openSidebar() {
        document.getElementById("main").style.marginLeft = "23%";
        document.getElementById("mySidebar").style.width = "23%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
      }
    closeSidebar(){
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = 'none';
        document.getElementById("openNav").style.display = "inline-block";
    }
     
    render() {
        return (
            <>
              <div className="main" id="main">
                        <div className="sidebar left " id="mySidebar">
                            <div className="user-panel">

                                <div className="pull-left image">
                                    <img src="http://via.placeholder.com/160x160" className="rounded-circle" alt="User Image" />
                                </div>
                                <div className="pull-left info">
                                    <p> Quản lý học viên <i className="fa fa-th-large" onClick={this.closeSidebar} /></p>
                                    <a href="/online"><i className="fa fa-circle text-success" /> Online</a>
                                </div>
                            </div>
                            <ul className="list-sidebar bg-defoult">
                            <li> <a href="/home"><i className="fa fa-th-large" /> <span className="nav-label">Dashboards</span></a> </li>
                                <li> <a href="/" data-toggle="collapse" data-target="#dashboard" className="collapsed active"> <i className="fa fa-th-large" /> <span className="nav-label"> Người Dùng</span> <span className="fa fa-chevron-left pull-right" /> </a>
                                    <ul className="sub-menu collapse" id="dashboard">
                                        <li className="active"><a href="user">Danh Sách Người Dùng</a></li>
                                        
                                    </ul>
                                </li>
                                
                                {/* <li> <a href="/student"><i className="fa fa-diamond" /> <span className="nav-label">Quản lý học viên</span></a> </li>
                                <li> <a href="/teacher"><i className="fa fa-files-o" /> <span className="nav-label">Quản lý giáo viên</span></a> </li> */}
                                {/* <li> <a href="/student"><i className="fa fa-files-o" /> <span className="nav-label">Other Pages</span></a> </li> */}
                                <li> <a href="#" data-toggle="collapse" data-target="#products" className="collapsed active"> <i className="fa fa-diamond" /> <span className="nav-label">Quản Lý Học Viên</span> <span className="fa fa-chevron-left pull-right" /> </a>
                                    <ul className="sub-menu collapse" id="products">
                                        <li className="active"><a href="/student"  >Thêm Học Viên</a></li>
                                        <li><a href="/accountStudent">Tài Khoản Học Viên</a></li>
                                        
                                    </ul>
                                </li>
                                {/* <li> <a href="#" data-toggle="collapse" data-target="#products" className="collapsed active"> <i className="fa fa-diamond" /> <span className="nav-label">Quản Lý Giáo Viên</span> <span className="fa fa-chevron-left pull-right" /> </a>
                                    <ul className="sub-menu collapse" id="products">
                                        <li className="active"><a href="/teacher"  >Thêm Giáo Viên</a></li>
                                        <li><a href="/accountTeacher">Tài Khoản Giáo Viên</a></li> */}
                                        {/* <li><a href="#">Buttons</a></li>
                                        <li><a href="#">Tabs &amp; Accordions</a></li>
                                        <li><a href="#">Typography</a></li>
                                        <li><a href="#">FontAwesome</a></li>
                                        <li><a href="#">Slider</a></li>
                                        <li><a href="#">Panels</a></li>
                                        <li><a href="#">Widgets</a></li>
                                        <li><a href="#">Bootstrap Model</a></li> */}
                                    {/* </ul>
                                </li> */}

                                {/* <li> <a href="#"><i className="fa fa-laptop" /> <span className="nav-label">Grid options</span></a> </li> */}
                                <li> <a href="#" data-toggle="collapse" data-target="#tables" className="collapsed active"><i className="fa fa-table" /> <span className="nav-label">Quản Lý Giáo Viên</span><span className="fa fa-chevron-left pull-right" /></a>
                                    <ul className="sub-menu collapse" id="tables">
                                        <li><a href="/teacher"> Thêm Giáo Viên</a></li>
                                        <li><a href= "/accountTeacher"> Tài Khoản Giáo Viên</a></li>
                                    </ul>
                                </li>
                                {/* <li> <a href="#" data-toggle="collapse" data-target="#e-commerce" className="collapsed active"><i className="fa fa-shopping-cart" /> <span className="nav-label">E-commerce</span><span className="fa fa-chevron-left pull-right" /></a>
                                    <ul className="sub-menu collapse" id="e-commerce">
                                        <li><a href> Products grid</a></li>
                                        <li><a href> Products list</a></li>
                                        <li><a href>Product edit</a></li>
                                        <li><a href> Product detail</a></li>
                                        <li><a href>Cart</a></li>
                                        <li><a href> Orders</a></li>
                                        <li><a href> Credit Card form</a> </li>
                                    </ul>
                                </li>
                                <li> <a href><i className="fa fa-pie-chart" /> <span className="nav-label">Metrics</span> </a></li>
                                 */}
                                
                            </ul>
                        </div>
                    <div>
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <FaBars id="openNav"
                            onClick={this.openSidebar} />
                                <NavbarForm/>
                                    
                        </nav>
                    </div>
                    <div>
                        <div className="container">
                            <AddModal/>
                            <div className="card bg-primary text-white">
                                <div className="card-body">DANH SÁCH NGƯỜI DÙNG</div>
                            </div>
                            <div>
                                <FormSearchUser>

                                </FormSearchUser>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default PageUser;

