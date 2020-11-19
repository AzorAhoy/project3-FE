import React, { Component } from 'react';



class ListItemTeacher extends Component {
    render() {
        var { techer, index } =  this.props;
        return (
            <>
            <tr>
                      <td>{index + 1}</td>
                      <td>{techer.name}</td>
                      <td>{techer.date}</td>
                      <td>{techer.diachi}</td>
                      <td>{techer.sdt}</td>
                      <td>{techer.email}</td>
                      <td>{techer.gioitinh}</td>
                      <td>
                      <button type="button" className="btn btn-info">xóa</button>
                      <button type="button" className="btn btn-warning">edit</button>
                      </td>
            </tr>

            </>
        );
    }
}

export default ListItemTeacher;