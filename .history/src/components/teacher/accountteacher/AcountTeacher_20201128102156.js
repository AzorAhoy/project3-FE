import React, { Component } from 'react';
import { GrAdd } from "react-icons/gr";
import HomePage from '../HomePage';
import ItemAccount from './ItemAccount';

import ListAccountTeacher from './ListAccountTeacher';
class AcountTeacher extends Component {
    render() {
        var acountteachers =[];
        return (
            <div>
                <HomePage/>
                <div className="container">
                        <div>
                        <button type="button" className="btn btn-primary"> < GrAdd/> Thêm Tài Khoản Giáo Viên </button>
                        </div><br/>
                    <div class="card bg-primary text-white">
                        <div class="card-body">ACOUNT GIÁO VIÊN</div>
                    </div>
                    <div>
                     <ListAccountTeacher>
                      {this.showTeachers(acountteachers)} 
                     </ListAccountTeacher>
                    </div>
                </div>

            </div>
        );
    }
    showTeachers(acountteachers){
        var result = null;
        if(acountteachers.length > 0){
           result=acountteachers.map((teacher, index ) =>{
                return(
                    <ItemAccount
                    key={index}
                    acountteachers={teacher}
                    index={index}
                    />
                );

           });
        }
        return result;
    }
}

export default AcountTeacher;