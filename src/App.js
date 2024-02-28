import "./assets/scss/index.scss";
import Router from "./router/Router";
import Login from "./components/Login/Login";
import Aside from "./components/Header/Aside";
import Header from "./components/Header/Header";
import React, { Fragment, useEffect } from "react";
import { useAuth } from "./components/Context/AuthContext";

function App() {
  const { loginAccess, login } = useAuth(); //로그인여부 확인

  useEffect(() => {
    const loginStatus = localStorage.getItem("Access");
    if (loginStatus === "true") {
      login();
    }
  }, []); // login 함수가 변경될 때마다 실행

  return (
    <Fragment>
      {loginAccess ? (
        <div className="screen">
          <div className="menu_area">
            <Aside />
          </div>
          <div className="main_area">
            <Header />
            <Router />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </Fragment>
  );
}

export default App;
