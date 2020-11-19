import React, { Component } from 'react';
import ListTeachers from './ListTeachers';

class ListItemTeacher extends Component {
    render() {
        var { techer, index } =  this.props;
        return (
            <>
            <tr>
                      <td>{index + 1}</td>
        <td>{ListTeachers.nam}</td>
                      <td>23-10-1998</td>
                      <td>Hà Nội</td>
                      <td>0338014326</td>
                      <td>nhat.nv23101998@gmail.com</td>
                      <td>Nam</td>
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