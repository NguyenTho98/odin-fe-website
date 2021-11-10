import BlogSlider from "../component/blogSlider";
import React from 'react';
import bg1 from './../assets/images/background/bg1.png';

function Blog() {
  return (
    <>
      <section className="content-inner-2" style={{backgroundImage:`url(${bg1})`}}>
			<div className="container">
				<div className="section-head style-1 text-center">
					<h6 className="sub-title bgl-primary m-b20 text-primary">Blog</h6>
					<h2 className="title">Latest Blog & News</h2>
				</div>
				<BlogSlider/>
			</div>
		</section>
    </>
  )
}

export default Blog;