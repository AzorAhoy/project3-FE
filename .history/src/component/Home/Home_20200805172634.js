import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="Home">

            <div id="Menu" className="sibebar">
                <img src="image/01.JPG" alt="slider" />
                <ul className="listMenu">
                    
                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li> 
                    <li>
                        <a href="/phanquyen">Phân Quyền</a>
                    </li>
                    <li>
                        <a href="/nhaphanphoi">Nhà Phân Phối</a>
                    </li>
                    <li>
                        <a href="/donhang">Đơn Hàng </a>
                    </li>
                    <li>
                        <a href="/dungthu">Dùng Thử</a>
                    </li>
                    <li>
                        <a href="/quanlykey">Quản Lý Key</a>
                    </li>
                    <li>
                        <a href="/yeucaucapduoi">Yêu Cầu Đổi Key Cấp Dưới</a>
                    </li>
                    <li>
                        <a href="/quanlygiamgia">Quản Lý Mã Giảm Giá</a>
                    </li>
                    <li>
                        <a href="/baocao">Báo Cáo</a>
                    </li>
                    <li>
                        <a href="/congcu">Công Cụ</a>
                    </li>
                </ul>
            </div>
            </div>
        );  
    }
}

export default Home;