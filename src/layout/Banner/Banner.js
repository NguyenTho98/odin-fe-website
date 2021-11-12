import React from "react";
import "./Banner.scss";
function Banner(props) {
    const { name , link } = props;
  return (
    <div className="banner-wrapper">
      {/* <!-- Banner  --> */}
      <div className="banner-dlab-bnr-inr">
        <div className="container">
          <div className="banner-dlab-bnr-inr-entry">
            <h1>{name}</h1>
            {/* <!-- Breadcrumb Row --> */}
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">
                    <a>Trang chủ</a>
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {name}
                </li>
              </ul>
            </nav>
            {/* <!-- Breadcrumb Row End --> */}
          </div>
        </div>
      </div>
      {/* <!-- Banner End --> */}
    </div>
  );
}

export default Banner;
