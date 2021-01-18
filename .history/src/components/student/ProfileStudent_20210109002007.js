import Axios from 'axios';
import React, { Component, useState } from 'react';
function ProfileStudent(props) {
    const [infor, setInfor] = useState(props)
    const getData = async () => {
        const res = await Axios.get('http://localhost:5000/api/student/', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
    }
    const handleChange = async (e) => {
        const { name, value } = e.target
        console.log(value + "==>" + name);
        this.setState({
            ...this.state,
            [name]: value
        })
    }
    const handleClick = async () => {
        console.log("state   ", JSON.stringify(this.state));
    }
    // console.log("props", this.props.studentInfo);

    return (
        <>

        </>
    );
}


export default ProfileStudent();