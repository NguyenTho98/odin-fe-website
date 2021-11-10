import Slider from "react-slick";
import React from 'react';
import pic3 from './../assets/images/main-slider/slider1/pic3.png';
import pic4 from './../assets/images/main-slider/slider1/pic4.png';
import pic2 from './../assets/images/main-slider/slider1/pic2.png';
import pic1 from './../assets/images/move/pic1.png';

function Slider1 () {
    return (
      <>
        <div className="banner-one" style={{backgroundImage:`url(${pic2})`}}>
			<div className="container">
				<div className="banner-inner">
					<div className="img1"><img src={pic3} alt=""/></div>
					{/* <div className="img2"><img src={pic4} alt=""/></div> */}
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="banner-content">
							
								<h2 data-wow-duration="1.2s" data-wow-delay="1s" className="wow fadeInUp ">ODIN LANGUAGE ACADEMY</h2>
								<p style={{fontSize: 20}} data-wow-duration="1.4s" data-wow-delay="1.5s" className="wow fadeInUp m-b30">Học viện anh ngữ quốc tế hàng đầu</p>
								<a href="about-us-1" ><a  data-wow-duration="1.6s" data-wow-delay="2s" className="wow fadeInUp btn btn-link d-inline-flex align-items-center" ><i className="fa fa-angle-right m-r10"></i>Tìm hiểu thêm</a></a>
							</div>
						</div>
						<div className="col-md-6">
							<div className="dz-media move-box wow fadeIn" data-wow-duration="1.6s" data-wow-delay="0.8s" >
								<img className="move-1" src={pic1} alt=""/>
								{/* <img className="move-2" src="images/move/pic2.png" alt=""/> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
      </>
    )
  }
  
  export default Slider1;