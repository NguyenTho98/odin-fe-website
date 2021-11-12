/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import bg1 from './../assets/images/about/img5.png';

function Features() {
    return (
      <>
        <section className="content-inner-2">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-8 col-lg-9 col-md-12 col-xs-12 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						
						<div className="section-wraper-one">
							<div className="icon-bx-wraper style-2 left m-b30">
								<div className="icon-bx-md radius bg-white text-red"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-idea"></i>
									</a> 
								</div>
								<div className="icon-content">
									<h4 className="dlab-title">ĐỘI NGŨ HỌC THUẬT</h4>
									<p>Với đội ngũ giảng viên chất lượng cao trong và ngoài nước với phương pháp giảng dạy đặc biệt luôn nỗ lực để không ngừng gia tăng trải nghiệm học tập cũng như đưa các bạn học viên chạm tới mong ước của mình.</p>
								</div>
							</div>
							<div className="icon-bx-wraper style-2 left m-b30">
								<div className="icon-bx-md radius bg-white text-yellow"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-line-graph"></i>
									</a> 
								</div>
								<div className="icon-content">
									<h4 className="dlab-title">PHƯƠNG PHÁP HỌC TẬP</h4>
									<p>Phương pháp học tiếng anh BBST là sự hệ thống hóa lại một cách logic nhất hệ thống ngữ pháp. Trong tương lai tới, Viện ICOVOT hợp tác nghiên cứu với các chuyên gia trong việc xây dựng nền tảng app đơn giản trên di động.</p>
								</div>
							</div>
							<div className="icon-bx-wraper style-2 left m-b30">
								<div className="icon-bx-md radius bg-white text-green"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-rocket"></i>
									</a> 
								</div>
								<div className="icon-content">
									<h4 className="dlab-title">QÚA TRÌNH PHÁT TRIỂN</h4>
									<p>Sau gần 3 năm thành lập, Học viện Anh ngữ Quốc tế Odin Language Academy tự hào đã và đang trở thành điểm đến lý tưởng cho các bạn học viên đang theo đuổi niềm đam mê Tiếng Anh của mình và chúng tôi đang ngày càng khẳng định vị thế của mình.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-lg-3 col-md-12 col-xs-12 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="dlab-media">
							<img src={bg1} className="move-2" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Features;