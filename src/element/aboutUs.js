import React from "react";
import img4 from "./../assets/images/about/img4.png";
function AboutUs() {
  return (
    <>
      <section className="content-inner">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src={img4} className="move-1" alt="" />
              </div>
            </div>
            <div
              className="col-lg-7 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="section-head style-1 mb-4">
                <h5 className="title">
                  ODIN LANGUAGE ACADEMY - Fight Like God & Study Like God
                </h5>
              </div>
              <div className="d-flex item-about">
                <div className="icon">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 1L13.4355 6.92429L20 7.88013L15.25 12.489L16.371 19L10.5 15.9243L4.629 19L5.75 12.489L1 7.88013L7.5645 6.92429L10.5 1Z"
                      fill="white"
                      stroke="#F6C037"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="title">
                  Là Học viện ứng dụng và chuyển giao công nghệ của phương pháp
                  giảng dạy BBST thuộc Viện nghiên cứu ICOVOT và tác giả TS.
                  Nguyễn Trọng Giao của bộ sản phẩm Quốc gia “Tiếng anh siêu tốc
                  cho người Việt”
                </div>
              </div>
              <div className="d-flex item-about">
                <div className="icon">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 1L13.4355 6.92429L20 7.88013L15.25 12.489L16.371 19L10.5 15.9243L4.629 19L5.75 12.489L1 7.88013L7.5645 6.92429L10.5 1Z"
                      fill="white"
                      stroke="#F6C037"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="title">
                  Với chúng tôi, việc áp dụng Khoa học - Công nghệ cho việc học,
                  đào tạo và phát triển tư duy ngôn ngữ là một trong những tiêu
                  chí hàng đầu mà chúng tôi hướng tới cho cộng đồng.{" "}
                </div>
              </div>
              <div className="d-flex item-about">
                <div className="icon">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 1L13.4355 6.92429L20 7.88013L15.25 12.489L16.371 19L10.5 15.9243L4.629 19L5.75 12.489L1 7.88013L7.5645 6.92429L10.5 1Z"
                      fill="white"
                      stroke="#F6C037"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="title">
                  Với tôn chỉ: “STUDY LIKE GODS”, Odin Language Academy đang
                  hoàn thành tốt sứ mệnh đem đến môi trường học bổ ích cho các
                  sinh viên, trau dồi và rèn luyện kiến thức cũng như gia tăng
                  trải nghiệm thực tế cho học viên trong quá trình học tiếng Anh
                  của mình.
                </div>
              </div>
              <a href="about-us-1">
                <a className="btn btn-link d-inline-flex align-items-center">
                  <i className="fa fa-angle-right m-r10"></i>Tìm hiểu thêm
                </a>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
