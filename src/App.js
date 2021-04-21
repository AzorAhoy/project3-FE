import React, { useEffect, useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import PageTeacher from "./components/teacher/PageTeacher";
import Login from "./components/Login";
//import Register from './components/Register';
import PageStudent from "./components/student/PageStudent";
import AcountTeacher from "./components/teacher/accountteacher/AcountTeacher";
import PageUser from "./components/user/PageUser";
import DashboardStudent from "./components/student/pageStudent/DashboardStudent";
import DashboardTeacher from "./components/teacher/pageTeacher/DashboardTeacher";
import PageClass from "./components/class/PageClass";
import Course from "./components/course/Course";
import Pagetimetable from "./components/timetable/Pagetimetable";
//import "./loader";

export default function App() {
  const [isLogin, setLogin] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [isTeacher, setTeacher] = useState(false);
  const [isStudent, setStudent] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") != "undefined"
    ) {
      setLogin(true);
      // console.log("isLogin:  " + isLogin);
    }
    if (!localStorage.getItem("token")) {
      setLogin(true);
      // console.log("isLogin:  " + isLogin);
    }
    if (localStorage.getItem("role") === "ADMIN") {
      setAdmin(true);
    } else if (localStorage.getItem("role") === "TEACHER") {
      setTeacher(true);
    } else if (localStorage.getItem("role") === "STUDENT") {
      setStudent(true);
    }
  }, [isLogin, isAdmin, isTeacher, isStudent]);
  
  return (
    <>
      <div>
        <BrowserRouter>
          {/* <HomePage /> */}
          <div>
            <Switch>
              <Route path="/teacher" component={PageTeacher} />
              <Route path="/home" component={Dashboard} />
              <Route path="/student" component={PageStudent} />
              <Route exact path="/" component={Login} />
              {/* {(isLogin && isAdmin) ? (<Route exact path="/" component={HomePage} />) : (<Redirect to='login' />)}
              {(isLogin && isTeacher) ? (<Route exact path="/Teacher" component={Teacher} />) : (<Redirect to='login' />)}
              {(isLogin && isStudent) ? (<Route exact path="/student" component={Student} />) : (<Redirect to='login' />)} */}
              {/* //<Route path="/regist" component={Register} /> */}
              <Route path="/hocsinh" component={DashboardStudent} />
              <Route path="/giaovien" component={DashboardTeacher} />
              <Route path="/accountTeacher" component={AcountTeacher} />
              <Route path="/user" component={PageUser} />
              <Route path="/class" component={PageClass} />
              <Route path="/course" component={Course} />
              <Route path="/timetable" component={Pagetimetable} />
            </Switch>

            {/* <Route path='/' /> */}
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}
