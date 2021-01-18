import React, { Component } from 'react';
import axios from 'axios';


class ListItemTeacher extends Component {
    state = {
        teachers: []
      }
      UserMount() {
        axios.get('http://localhost:5000/routes/api/user')
          .then(res => {
            const teachers = res.data;
            this.setState({ teachers });
            console.log(res.data);
          })
          .catch(error => console.log(error));
      }
    render() {
        this.state.teachers.map((value, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{value.name}</td>
                    <td>{value.gender}</td>
                    <td>{value.dOb}</td>
                    <td >
                        <Image thumb src={value.image} />
                    </td>
                </tr>   
             );
    }   }
}

export default ListItemTeacher;