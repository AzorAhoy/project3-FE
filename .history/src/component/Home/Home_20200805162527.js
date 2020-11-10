import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div id="menu">
                <image></image>
                <ul className="listMenu">
                    <li>
                        <a>Dashboard</a>
                    </li>
                    <li>
                        <a>Phân Quyền</a>
                    </li>
                    <li>
                        <a>Nhà Phân Phối</a>
                    </li>
                    <li>
                        <a>Đơn Hàng </a>
                    </li>
                    <li>
                        <a>Dùng Thử</a>
                    </li>
                    <li>
                        <a>Quản Lý Key</a>
                    </li>
                    <li>
                        <a>Yêu Cầu Đổi Key Cấp Dưới</a>
                    </li>
                    <li>
                        <a>Quản Lý Mã Giảm Giá</a>
                    </li>
                    <li>
                        <a>Báo Cáo</a>
                    </li>
                    <li>
                        <a>Công Cụ</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;