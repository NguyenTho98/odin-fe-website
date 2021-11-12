import React from "react";

import Quote from "../../element/quote";
import Banner from "../../layout/Banner/Banner";

function Register(props) {
  const { setIsShowModalThank } = props;
  return (
    <>
     <Banner name="Đăng ký" link=""/>
     <Quote setIsShowModalThank={setIsShowModalThank}/>
    </>
  );
}

export default Register;
