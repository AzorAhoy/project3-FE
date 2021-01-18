import React, { Component } from 'react';

class SideBarStudent extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <aside>
                        <div className="sidebar left ">
                            <div className="user-panel">

                                <div className="pull-left image">
                                    <img src="http://via.placeholder.com/160x160" className="rounded-circle" alt="User Image" />
                                </div>
                                <div className="pull-left info">
                                    <p>Quản lý học viên</p>
                                    <a href="/online"><i className="fa fa-circle text-success" /> Online</a>
                                </div>
                            </div>
                            <ul className="list-sidebar bg-defoult">
                                <li> <a href="/home"><i className="fa fa-th-large" /> <span className="nav-label">Dashboards</span></a> </li>

                                <li> <a href="/aaa" data-toggle="collapse" data-target="#products" className="collapsed active"> <i className="fa fa-diamond" /> <span className="nav-label">Quản Lý Học Viên</span> <span className="fa fa-chevron-left pull-right" /> </a>
                                    <ul className="sub-menu collapse" id="products">
                                        <li className="active"><a href="/bangdiem">Bảng điểm học viên</a></li>
                                        <li><a href="/danhgia">Đánh giá</a></li>
                                        
                                    </ul>
                                </li>
                               
                                <li> <a href="/kkk" data-toggle="collapse" data-target="#tables" className="collapsed active"><i className="fa fa-table" /> <span className="nav-label">Ứng dụng</span><span className="fa fa-chevron-left pull-right" /></a>
                                    <ul className="sub-menu collapse" id="tables">
                                        <li><a href="/teacher"> Thêm Giáo Viên</a></li>
                                        <li><a href= "/accountTeacher"> Tài Khoản Giáo Viên</a></li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        );
    }
}

export default SideBarStudent;