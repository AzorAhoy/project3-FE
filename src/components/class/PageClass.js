import React, { Component } from 'react';
import HomePage from '../HomePage';
import FormSearchClass from './FormSearchClass';

class PageClass extends Component {
    render() {
        return (
            <div>
                 <HomePage/>
                    <div>
                        <div className="container">
                            
                            <div className="card bg-primary text-white">
                                <div className="card-body">DANH SÁCH LỚP HỌC</div>
                            </div>
                            <div>
                                <FormSearchClass/>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default PageClass;