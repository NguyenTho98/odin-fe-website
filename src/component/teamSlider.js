/* eslint-disable jsx-a11y/anchor-has-content */
import Slider from "react-slick";
import React from 'react';
import pic1 from "./../assets/images/team/pic1.jpg";
import pic2 from "./../assets/images/team/pic2.jpg";
import pic3 from "./../assets/images/team/pic3.jpg";
function TeamSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    arrows: false,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1	,
          infinite: true,
          dots: true,
        },
      },
	  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className="team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
      >
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.1s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src={pic1} alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">MS. NGUYEN HONG MINH</a>
                </h4>
                <span className="dlab-position">IELTS TEACHER</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
             
                <img src={pic2} alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">MS. NGUYEN HAI YEN</a>
                </h4>
                <span className="dlab-position">BBST AND IELTS TEACHER</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
                <img src={pic3} alt="" />   
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">MR. HOANG HUU DUC </a>
                </h4>
                <span className="dlab-position">BBST & IELTS TEACHER</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
                <img src={pic1} alt="" />
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Alina Jia</a>
                </h4>
                <span className="dlab-position">Senior Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
             
                <img src={pic2} alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Suresh Doe</a>
                </h4>
                <span className="dlab-position">Senior Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src={pic3} alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Domina Li</a>
                </h4>
                <span className="dlab-position">Senior Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.7s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
             
                <img src={pic1} alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Alina Jia</a>
                </h4>
                <span className="dlab-position">Senior Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.8s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src={pic2} alt="" />
              
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Suresh Doe</a>
                </h4>
                <span className="dlab-position">Senior Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.9s"
        >
          <div className="dlab-team style-1 m-b10">
            <div className="dlab-media">
              
                <img src={pic3} alt="" />
             
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h4 className="dlab-name">
                  <a href="/team-1">Domina Li</a>
                </h4>
                <span className="dlab-position">Senior Designer</span>
              </div>
              <ul className="dlab-social-icon primary-light">
                <li>
                  <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default TeamSlider;
