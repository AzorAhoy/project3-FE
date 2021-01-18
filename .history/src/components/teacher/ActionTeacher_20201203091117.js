import React, { Component } from 'react';

class ActionTeacher extends Component {
    state = {
        teachers: []
      }
      componentDidMount() {
        axios.get('http://localhost:5000/api/auth/teacher')
          .then(res => {
            const persons = res.data;
            this.setState({ teachers });
          })
          .catch(error => console.log(error));
      }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ActionTeacher;