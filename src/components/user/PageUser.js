import React, { Component } from 'react';
import FormSearchUser from './FormSearchUser';
import HomePage from '../HomePage';

class PageUser extends Component {
    
    render() {
        return (
            <>
                    <HomePage/>
                    <div>
                        <div className="container">
                            
                            <div className="card bg-primary text-white">
                                <div className="card-body">DANH SÁCH NGƯỜI DÙNG</div>
                            </div>
                            <div>
                                <FormSearchUser>

                                </FormSearchUser>
                            </div>
                        </div>
                    </div>
                
            </>
        );
    }
}


export default PageUser;

