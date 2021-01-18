import React, { Component } from 'react';

class ListItemStudent extends Component {
    render() {
        var { student, index } =  this.props;
        return (
            <div>
                <tr>
                      <td>{index + 1}</td>
                      <td>{student.name}</td>
                      <td>{student.date}</td>
                      <td>{student.diachi}</td>
                      <td>{student.sdt}</td>
                      <td>{student.email}</td>
                      <td>{student.lop}</td>
                      <td>{student.gioitinh}</td>
                      <td>
                      <button type="button" className="btn btn-info">xóa</button>
                      <button type="button" className="btn btn-warning">edit</button>
                      </td>
                </tr>
            </div>
        );
    }
}

export default ListItemStudent;