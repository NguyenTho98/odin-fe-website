import React from "react";
import "./Logo.scss";
import Banner from "../../layout/Banner/Banner";
function Logo(props) {
  return (
    <div className="logo-wrapper">
      <Banner name="Logo Odin" />
      <section className="content-inner">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            ></div>
            <div
              className="col-lg-7 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
              style={{ width: "100%" }}
            >
              <h5 className="title"> Ý NGHĨA LOGO</h5>
              <div className="item-logo">
                <div className="content">
                  Là sứ giả của nhiều nền văn hóa và ngôn ngữ, logo Odin
                  Language Academy được thiết kế bằng những đường nét thanh
                  thoát, hài hòa với những màu sắc nổi bật như chính tính cách
                  của con người và văn hóa tại Odin
                </div>
              </div>
              <div className="item-logo">
                <div className="content">
                  Logo Odin vẫn được thiết kế trên cơ sở của mặt nghiêng của
                  chiếc mũ chiến đấu của một vị thần Bắc Âu "Odin" lan tỏa sức
                  mạnh, tốc độ, tinh thần chiến đấu không ngừng, thể hiện sự kết
                  nối và mong muốn hợp tác nhằm đưa văn hóa, ngôn ngữ các quốc
                  gia đến gần hơn với nhân dân các nước trên thế giới.
                </div>
              </div>
              <div className="item-logo">
                <div className="content">
                  Hợp tác để phát triển một cách bền vững. Đồng thời, thể hiện
                  nội lực và khát vọng phát triển của Trung tâm, vươn xa hơn nữa
                  trên bản đồ đào tạo, trở thành đơn vị hàng đầu trong lĩnh vực
                  đào tạo, giới thiệu văn hóa toàn cầu.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Logo;
