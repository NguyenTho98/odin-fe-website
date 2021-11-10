import React from "react";
import bg13 from "./../assets/images/background/bg13.png";
import img9 from "./../assets/images/about/img9.png";

function Newsletter() {
  return (
    <>
      <section
        className="content-inner-3 bg-primary"
        style={{
          backgroundImage: `url(${bg13})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-4 col-md-5 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dlab-media m-b30">
                <img src={img9} className="move-2" alt="" />
              </div>
            </div>
            <div
              className="col-lg-8 col-md-7 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="section-head style-1 text-white">
                <h2 className="title m-b15">BAN ĐIỀU HÀNH </h2>
                <div className="d-flex content-inner-3-item" style={{ marginBottom: 20}}>
                  <div className="icon" style={{ marginRight: 10}}>
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                      <path
                        d="M19.8223 24H17V13.1211L13.6309 14.166V11.8711L19.5195 9.76172H19.8223V24Z"
                        fill="#FEAB00"
                      />
                    </svg>
                  </div>
                  <div className="text">
                    Với đội ngũ ban điều hành là các Tiến sĩ, Thạc sĩ - những
                    người đứng đầu cho các kĩ thuật công nghệ tiên tiến được áp
                    dụng trong quá trình giảng dạy tại Odin.
                  </div>
                </div>
                <div className="d-flex content-inner-3-item" style={{ marginBottom: 20}}>
                  <div className="icon"  style={{ marginRight: 10}}>
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                      <path
                        d="M22.7129 24H12.9668V22.0664L17.5664 17.1641C18.1979 16.474 18.6634 15.8717 18.9629 15.3574C19.2689 14.8431 19.4219 14.3548 19.4219 13.8926C19.4219 13.2611 19.2624 12.7663 18.9434 12.4082C18.6243 12.0436 18.1686 11.8613 17.5762 11.8613C16.9382 11.8613 16.4336 12.0827 16.0625 12.5254C15.6979 12.9616 15.5156 13.5378 15.5156 14.2539H12.6836C12.6836 13.388 12.8887 12.597 13.2988 11.8809C13.7155 11.1647 14.3014 10.6048 15.0566 10.2012C15.8118 9.79102 16.668 9.58594 17.625 9.58594C19.0898 9.58594 20.2259 9.9375 21.0332 10.6406C21.847 11.3438 22.2539 12.3366 22.2539 13.6191C22.2539 14.3223 22.0716 15.0384 21.707 15.7676C21.3424 16.4967 20.7174 17.3464 19.832 18.3164L16.5996 21.7246H22.7129V24Z"
                        fill="#FEAB00"
                      />
                    </svg>
                  </div>
                  <div className="text">
                    Với tôn chỉ: “STUDY LIKE GOD”, Odin Language Academy đang
                    hoàn thành tốt sứ mệnh đem đến môi trường học bổ ích cho các
                    sinh viên, trau dồi và rèn luyện kiến thức cũng như gia tăng
                    trải nghiệm thực tế cho học viên trong quá trình học tiếng
                    Anh của mình.
                  </div>
                </div>
                <p>
                  Bạn hãy để lại email để được đội ngũ chăm sóc của Odin giới
                  thiệu thêm về Học viện anh ngữ Odin và các khóa học hỗ trợ cho
                  nhu cầu của bạn.
                </p>
              </div>
              <div className="dlab-subscribe style-2 max-w500">
                <form
                  className="dzSubscribe"
                  action="script/mailchamp.php"
                  method="post"
                >
                  <div className="dzSubscribeMsg"></div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        type="email"
                        className="form-control"
                        placeholder="Nhập địa chỉ Email"
                      />
                      <div className="input-group-addon">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="btn rounded-xl shadow btn-primary"
                        >
                         Đăng ký
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
