import { useState } from "react";
import React from 'react';

function Pricing() {
  const [open, setOpen] = useState("p2");
  return (
    <>
      <section
        className="content-inner"
        style={{
          backgroundImage: "url(images/background/bg20.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h4 className="title">KHÓA HỌC TẠI ODIN</h4>
          </div>
          <div className="row pricingtable-wraper-2">
            <div className="col-lg-3 col-md-6">
              <div
                className={`${
                  open === "p1"
                    ? "pricingtable-wrapper active style-1 m-b30"
                    : "pricingtable-wrapper style-1 center m-b30"
                }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div className="pricingtable-inner">
                  <div className="pricingtable-title">
                    <h3 className="title">NEW BBST</h3>
                  </div>
                  <div className="pricingtable-price"></div>
                  <p className="text">
                    Ứng dụng công trình khoa học “Công nghệ tiếng Anh siêu tốc”
                    vào việc học ngoại ngữ cho các Học Viên mất gốc, tiếng anh
                    cơ bản{" "}
                  </p>

                  <div className="pricingtable-footer">
                    <a
                      href="/pricing-table-1"
                      className="btn btn-primary rounded-md"
                    >
                      Xem thêm <i className="fa fa-angle-right m-l10"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className={`${
                  open === "p2"
                    ? "pricingtable-wrapper active style-1 m-b30"
                    : "pricingtable-wrapper style-1 center m-b30"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="pricingtable-inner">
                  <div className="pricingtable-title">
                    <h4 className="title">GIAO TIẾP</h4>
                  </div>
                  <div className="pricingtable-price"></div>
                  <p className="text">
                    Khóa học nâng cao kỹ năng nghe, nói, đọc, viết giúp Học viên
                    củng cố lại kỹ năng ngoại ngữ
                  </p>

                  <div className="pricingtable-footer">
                    <a
                      href="/pricing-table-1"
                      className="btn btn-primary rounded-md"
                    >
                      Xem thêm <i className="fa fa-angle-right m-l10"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className={`${
                  open === "p3"
                    ? "pricingtable-wrapper active style-1 m-b30"
                    : "pricingtable-wrapper style-1 center m-b30"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="pricingtable-inner">
                  <div className="pricingtable-title">
                    <h4 className="title">TO1, TO2</h4>
                  </div>
                  <div className="pricingtable-price"></div>
                  <p className="text">
                    Khóa học luyện khi TOEIC, có thể ôn luyện và làm bài test
                    thử để chuẩn bị tốt cho quá trình thi nhận chứng chỉ của Học
                    viên
                  </p>

                  <div className="pricingtable-footer">
                    <a
                      href="/pricing-table-1"
                      className="btn btn-primary rounded-md"
                    >
                      Xem thêm <i className="fa fa-angle-right m-l10"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className={`${
                  open === "p4"
                    ? "pricingtable-wrapper active style-1 m-b30"
                    : "pricingtable-wrapper style-1 center m-b30"
                }`}
                onMouseOver={() => setOpen("p4")}
              >
                <div className="pricingtable-inner">
                  <div className="pricingtable-title">
                    <h4 className="title">IE1, IE2, IE3, IE4</h4>
                  </div>
                  <div className="pricingtable-price"></div>
                  <p className="text">
                    Khóa học luyện khi IELTS, có thể ôn luyện và làm bài test
                    thử để chuẩn bị tốt cho quá trình thi nhận chứng chỉ của Học
                    viên
                  </p>

                  <div className="pricingtable-footer">
                    <a
                      href="/pricing-table-1"
                      className="btn btn-primary rounded-md"
                    >
                      Xem thêm <i className="fa fa-angle-right m-l10"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
