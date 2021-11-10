import React from 'react';
import logo from './../assets/images/logo.png';
import { useState } from 'react';
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
                                <a href="#"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Đăng ký</a></a>
                            </div>
                        </div>
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <a href="/"><a><img src="./../assets/images/logo.png" alt=""/></a></a>
                            </div>
                            <ul className="nav navbar-nav navbar">	
                                <li><a href="/"><a>Trang chủ</a></a></li>
                                <li className={`${open === "about" ? "open" : ""}`}><a  onClick={() => setOpen("about")}><span>Giới thiệu</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="/about-us-1"><a>About Us</a></a></li>
										<li><a href="/faq-1"><a>Faq</a></a></li>
                                        <li><a href="/pricing-table-1"><a>Pricing Table</a></a></li>
										<li><a href="/team-1"><a>Team</a></a></li>
                                        <li><a href="/coming-soon"><a>Coming Soon</a></a></li>
                                        <li><a href="/error-404"><a>Error 404</a></a></li>
                                        <li><a href="/sitedown"><a>Site Down</a></a></li>
                                    </ul>
                                </li>
                                <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Đội ngũ</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                									
										<li><a href="/services-1"><a>Services</a></a></li>
										<li><a href="/services-details-1"><a>Services Details</a></a></li>
                                    </ul>
                                </li>
                                <li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Khóa học</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="/blog-large-right-sidebar"><a>Large Right Sidebar</a></a></li>
										<li><a href="/blog-details-1"><a>Blog Details</a></a></li>
                                    </ul>
                                </li>
                                <li className={`${open === "blog1" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Lịch khai giảng</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="/blog-large-right-sidebar"><a>Large Right Sidebar</a></a></li>
										<li><a href="/blog-details-1"><a>Blog Details</a></a></li>
                                    </ul>
                                </li>
								
								<li><a href="/contact-us-1"><a>Tuyển dụng</a></a></li>
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

  