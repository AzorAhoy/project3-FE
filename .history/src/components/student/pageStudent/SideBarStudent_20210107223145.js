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
                                    <p>Quản Lý Học Viên</p>
                                    <a href="/online"><i className="fa fa-circle text-success" /> Online</a>
                                </div>
                            </div>
                            <ul className="list-sidebar bg-defoult">
                                <li> <a href="/home"><i className="fa fa-th-large" /> <span className="nav-label">Trang Chủ</span></a> </li>

                                <li> <a href="/aaa" data-toggle="collapse" data-target="#products" className="collapsed active"> <i className="fa fa-diamond" /> <span className="nav-label">Kết Quả Học Tập</span> <span className="fa fa-chevron-left pull-right" /> </a>
                                    <ul className="sub-menu collapse" id="products">
                                        <li className="active"><a href="/bangdiem">Bảng Điểm </a></li>
                                        <li><a href="/danhgia">Đánh Giá </a></li>
                                        
                                    </ul>
                                </li>
                                <li> <a href="/thongtincanhan"><i className="fa fa-newspaper-o" /> <span className="nav-label">Thông Tin Cá Nhân</span></a> </li>
                                <li> <a href="/thoikhoabieuhocsinh"><i className="fas fa-calendar-alt" /> <span className="nav-label">Thời Khóa Biểu</span> </a></li>
                                <li> <a href="/hopthuhócinh"><i className="far fa-comment-alt" /> <span className="nav-label">Hộp Thư</span> </a></li>
                                <li> <a href="/lichhoc"><i className="fas fa-cogs" /> <span className="nav-label">Lịch Học</span></a> </li>
                                <li> <a href="/kho"><i className="fas fa-shapes" /> <span className="nav-label">Điểm Danh</span> </a></li>
                                {/* <li> <a href="/nhanvien"><i className="fa fa-address-book" /> <span className="nav-label">Nhân Viên</span> </a></li> */}
                                <li> <a href="/thanhtoanhocphi"><i className="fab fa-alipay" /> <span className="nav-label">Thanh Toán Học Phí</span> </a></li>
                                
                                
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        );
    }
}

export default SideBarStudent;