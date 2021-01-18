import React, { Component } from 'react';
import HomePage from '../HomePage';
import FormsearchCourse from './FormsearchCourse';


class PageClass extends Component {
    render() {
        return (
            <div>
                 <HomePage/>
                    <div>
                        <div className="container">
                            
                            <div className="card bg-primary text-white">
                                <div className="card-body">DANH SÁCH KHÓA HỌC</div>
                            </div>
                            <div>
                                <FormsearchCourse/>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default PageClass;