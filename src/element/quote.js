import React, { useState } from "react";
import bg1 from "./../assets/images/background/bg1.png";
import img1 from "./../assets/images/about/img2.png";
import axios from "axios";

function Quote(props) {
  const { setIsShowModalThank } = props;
  const [dataInfo, setDataInfo] = useState({
    name: "",
    gender: "",
    email: "",
    timeLean: "",
    course: "",
    phone: "",
    message: "",
  });
  const hanleChangeInput = (e) => {
    const { value, name } = e.target;
    setDataInfo({ ...dataInfo, [name]: value });
  };
  console.log("dataInfo", dataInfo);
  const sendData = () => {
    if (!dataInfo.name || !dataInfo.phone || !dataInfo.email) {
      return;
    }
    axios({
      method: "get",
      url: "https://v1.nocodeapi.com/nguyentho/google_sheets/dPZBcqoAQIrIgXDO?tabId=list",
    }).then((json) => {
      let data = {};
      data = {
        stt: json.data.total + 1,
        name: dataInfo.name,
        gender: dataInfo.gender,
        email: dataInfo.email,
        timeLean: dataInfo.timeLean,
        course: dataInfo.course,
        phone: dataInfo.phone,
        message: dataInfo.message,
        time: new Date().toLocaleTimeString("vi-VN", {
          hour12: false,
          day: "numeric",
          month: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      };
      try {
        fetch(
          "https://v1.nocodeapi.com/nguyentho/google_sheets/dPZBcqoAQIrIgXDO?tabId=list",
          {
            method: "post",
            body: JSON.stringify([
              [
                data.stt,
                data.name,
                data.phone,
                data.email,
                data.gender,
                data.course,
                data.timeLean,
                data.message,
                data.time,
              ],
            ]),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((json) => {
          if (json && json.status == 200) {
            setIsShowModalThank(true);
          }
        });
      } catch (error) {
        console.error("Error:", error);
      }
    });
  };
  return (
    <>
      <section
        className="content-inner"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="section-head style-1">
                <h2 className="title">ĐĂNG KÝ HOẶC NHẬN TƯ VẤN </h2>
              </div>
              <form
                className="dlab-form dzForm"
                method="POST"
                action="script/contact.php"
              >
                <div className="dzFormMsg"></div>
                <input
                  type="hidden"
                  className="form-control"
                  name="dzToDo"
                  value="Contact"
                />
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-user"></i>
                        </span>
                      </div>
                      <input
                        name="name"
                        type="text"
                        required
                        onChange={hanleChangeInput}
                        value={dataInfo.name}
                        className="form-control"
                        placeholder="Họ và tên"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-mars"></i>
                        </span>
                      </div>
                      <select
                        name="gender"
                        className="form-control"
                        required
                        value={dataInfo.gender}
                        onChange={hanleChangeInput}
                      >
                        <option selected>Giới tính</option>
                        <option value="1">Nam </option>
                        <option value="2">Nữ</option>
                        <option value="3">Khác</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-envelope"></i>
                        </span>
                      </div>
                      <input
                        name="email"
                        type="text"
                        value={dataInfo.email}
                        onChange={hanleChangeInput}
                        required
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-phone"></i>
                        </span>
                      </div>
                      <input
                        name="phone"
                        type="text"
                        value={dataInfo.phone}
                        onChange={hanleChangeInput}
                        required
                        className="form-control"
                        placeholder="Số điện thoại"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-clock-o"></i>
                        </span>
                      </div>
                      <select
                        name="timeLean"
                        className="form-control"
                        required
                        value={dataInfo.course}
                        onChange={hanleChangeInput}
                      >
                        <option selected>Khung giờ</option>
                        <option value="1">Thứ 2 & thứ 6</option>
                        <option value="2">Thứ 3 & thứ 5</option>
                        <option value="3">Thứ 4 & Chủ nhật</option>
                        <option value="4">Khác</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-list"></i>
                        </span>
                      </div>
                      <select
                        name="course"
                        onChange={hanleChangeInput}
                        className="form-control"
                        required
                      >
                        <option selected>Khoá học</option>
                        <option value="1">Giao tiếp</option>
                        <option value="2">TO1, TO2</option>
                        <option value="3">IE1, IE2</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-sms"></i>
                        </span>
                      </div>
                      <textarea
                        name="message"
                        required
                        value={dataInfo.message}
                        className="form-control"
                        placeholder="Lời nhắn"
                        onChange={hanleChangeInput}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <div
                        className="g-recaptcha"
                        data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                        data-callback="verifyRecaptchaCallback"
                        data-expired-callback="expiredRecaptchaCallback"
                      ></div>
                      <input
                        className="form-control d-none"
                        style={{ display: "none" }}
                        data-recaptcha="true"
                        required
                        data-error="Please complete the Captcha"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 mt-2">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      onClick={() => sendData()}
                      className="btn btn-link d-inline-flex align-items-center"
                    >
                      <i className="fa fa-angle-right m-r10"></i>Đăng ký
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-xl-6 col-lg-5 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="dlab-media cf-r-img">
                <img src={img1} className="move-1" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quote;
