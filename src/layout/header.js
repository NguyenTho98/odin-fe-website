/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from './../assets/images/logo.png';
import { useState } from 'react';
import {
   Link
} from "react-router-dom";
import './header.scss';
function Header() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
      <>
        {/* <!-- Header --> */}
        <header className="site-header header-transparent text-black mo-left" id="fix-header">
            {/* <!-- Main Header --> */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion logo-dark">
                           <a href="/"><a><img src={logo} alt=""/></a></a>
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <!-- Extra Nav --> */}
                        <div className="extra-nav">
                            <div className="extra-cell">
                                <Link to="/register"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Đăng ký</a></Link>
                            </div>
                        </div>
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <a href="/"><a><img src="./../assets/images/logo.png" alt=""/></a></a>
                            </div>
                            <ul className="nav navbar-nav navbar">	
                                <li><a href="/"><a>Trang chủ</a></a></li>
                                <li className={`${open === "about" ? "open" : ""}`}><a onClick={() => setOpen("about")}><span>Giới thiệu</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <Link to="/about"><li><a href="/"><a>Về anh ngữ Odin</a></a></li></Link>
										<Link to="/logo"><li><a href="/"><a>Logo Odin</a></a></li></Link>
                                        <li><a href="/"><a>Phương pháp đào tạo</a></a></li>
                                        <li><a href="/"><a>Tuyển dụng</a></a></li>
                                    </ul>
                                </li>
                                <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Đội ngũ</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                									
										<li><a href="/"><a>Đào tạo đội ngũ</a></a></li>
										<li><a href="/"><a>Đội ngũ giảng viên</a></a></li>
                                    </ul>
                                </li>
                                <li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Khóa học</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="/"><a>New BBST</a></a></li>
										<li><a href="/"><a>Giao Tiếp</a></a></li>
										<li><a href="/"><a>TO1, TO2</a></a></li>
										<li><a href="/"><a>IE1, IE2, IE3, IE4</a></a></li>
                                    </ul>
                                </li>
                                <li><a href="/"><a>Lịch khai giảng</a></a></li>
                            </ul>
                            <div className="dlab-social-icon">
                                <ul>
                                    <a href="https://en-gb.facebook.com/"><a className="fa fa-facebook"></a></a>
                                    <a href="https://twitter.com/login?lang=en"><a className="fa fa-twitter"></a></a>
                                    <a href="https://www.linkedin.com/login"><a className="fa fa-linkedin"></a></a>
                                    <a href="https://www.instagram.com/"><a className="fa fa-instagram"></a></a>
                                </ul>
                            </div>		
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Header End --> */}
        </header>
        {/* <!-- Header End --> */}
        
      </>
    )
  }
  
  export default Header;

  