import React, { Component } from 'react';

class Timetable extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Lớp</th>
                    <th scope="col">Khóa Học</th>
                    <th scope="col">Ngày</th>
                    <th scope="col">Bắt Đầu</th>
                    <th scope="col">Kết Thúc</th>
                    <th scope="col">Ghi Chú</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>

            </div>
        );
    }
}

export default Timetable;