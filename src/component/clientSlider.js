import Slider from "react-slick";
import React from 'react';
import img1 from './../assets/images/logo/logo-purple1.png';
import img2 from './../assets/images/logo/logo-light1.png';
import img3 from './../assets/images/logo/logo-purple2.png';
import img4 from './../assets/images/logo/logo-light2.png';
import img5 from './../assets/images/logo/logo-purple3.png';
import img6 from './../assets/images/logo/logo-light3.png';
import img7 from './../assets/images/logo/logo-purple4.png';
import img8 from './../assets/images/logo/logo-light4.png';
import img9 from './../assets/images/logo/logo-purple5.png';
import img10 from './../assets/images/logo/logo-light5.png';
import img11 from './../assets/images/logo/logo-purple6.png';
import img12 from './../assets/images/logo/logo-light6.png';
import img13 from './../assets/images/logo/logo-purple6.png';
import img14 from './../assets/images/logo/logo-light6.png';
function ClientSlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				
			  }
			},	
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				
			  }
			},
		]
    };
    return (
        <>
            <Slider {...settings}>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src={img1}
							alt=""
						/>
						<img
							className="logo-hover"
							src={img2}
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src={img3}
							alt=""
						/>
						<img
							className="logo-hover"
							src={img4}
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src={img4}
							alt=""
						/>
						<img
							className="logo-hover"
							src={img5}
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src={img6}
							alt=""
						/>
						<img
							className="logo-hover"
							src={img7}
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src={img8}
							alt=""
						/>
						<img
							className="logo-hover"
							src={img9}
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src={img10}
							alt=""
						/>
						<img
							className="logo-hover"
							src={img11}
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src={img12}
							alt=""
						/>
						<img
							className="logo-hover"
							src={img13}
							alt=""
						/>
					</div>
				</div>
			</Slider>
        </>
    );
}

export default ClientSlider;
