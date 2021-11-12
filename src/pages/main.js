import { useEffect, useState } from "react";
import React from 'react';
import Footer from "../layout/footer";
import Header from "../layout/header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home/Home";
import Register from "./Register/Register";
import ModalThank from "./Modal/ModalThank";
import About from "./About/About";
import Logo from "./Logo/Logo";
function Main() {
  const [isShowModalThank, setIsShowModalThank] = useState(false);
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return (
    <Router>
      <Header />
      <div className="page-content bg-white" id="top">
        <Switch>
          <Route path="/register">
            <Register isShowModalThank={isShowModalThank} setIsShowModalThank={setIsShowModalThank}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/logo">
            <Logo />
          </Route>
          <Route path="/">
            <Home setIsShowModalThank={setIsShowModalThank} isShowModalThank={isShowModalThank}/>
          </Route>
        </Switch>
      </div>
      <ModalThank isShowModalThank={isShowModalThank} setIsShowModalThank={setIsShowModalThank}></ModalThank>
      <Footer />
    </Router>
  );
}

export default Main;
