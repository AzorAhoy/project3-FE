import Axios from 'axios';
import React, { Component, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './NavbarForm.css';
function Register(props) {
    const [userInfo, setInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',

    })
    const [repeatPassword, setRepeatPassword] = useState()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({
            ...userInfo,
            [name]: value
        })
    }
    const apiRegist = async () => {
        const data = {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email,
            password: userInfo.password,
        }

        const url = 'https:localhost:3002/regist'
        const res = await Axios.post(url, data)
        if (res.) {
            props.history.push('/login'
        } else {
            alert('Sai maajt khau')

        }
    }
    const handleRegistButton = () => {

    }
    return (
        <div>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">

                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                    name="firstName"
                                                    onChange={(e) => handleChange(e)} placeholder="First Name" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="forme-control form-control-user" id="exampleLastName"
                                                    name='lastName'
                                                    onChange={(e) => handleChange(e)}
                                                    placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                                name="email"
                                                onChange={(e) => handleChange(e)}
                                                placeholder="Email Address" />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" className="form-control form-control-user" id="exampleInputPassword"
                                                    name="password"
                                                    onChange={(e) => handleChange(e)}
                                                    placeholder="Password" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="password" className="form-control form-control-user" id="exampleRepeatPassword"
                                                    name='repeatPassword'
                                                    onChange={(e) => handleChange(e)}
                                                    placeholder="Repeat Password" />
                                            </div>
                                        </div>
                                        <a className="btn btn-primary btn-user btn-block" onClick={() => {
                                            handleRegistButton()
                                        }} >
                                            Register Account
                            </a>
                                        {/* <hr />
                            <a href="index.html" className="btn btn-google btn-user btn-block">
                                <i className="fab fa-google fa-fw" /> Register with Google
                            </a>
                            <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                <i className="fab fa-facebook-f fa-fw" /> Register with Facebook
                            </a> */}
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div className="text-center">
                                        <a className="small" href="login.html">Already have an account? Login!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default withRouter(Register);