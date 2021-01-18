import React, { Component } from 'react';

class ItemAccount extends Component {
    render() {
        var { acountteacher, index } =  this.props;
        return (
            <div>
                <tr>
                      <td>{index + 1}</td>
                      <td>{acountteacher.name}</td>
                      <td>{acountteacher.gioitinh}</td>
                      <td>{acountteacher.email}</td>
                      <td>{acountteacher.password}</td>
                      <td>
                      <button type="button" className="btn btn-info">xóa</button>
                      <button type="button" className="btn btn-warning">edit</button>
                      </td>
                </tr>
            </div>
        );
    }
}

export default ItemAccount;