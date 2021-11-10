import { useEffect, useState } from "react";
import React from 'react';
import WhereCenter from "../component/where";
import AboutUs from "../element/aboutUs";
import Counter from "../element/counter";
import Newsletter from "../element/newsletter";
import Features from "../element/our-features";
import Pricing from "../element/pricing";
import Quote from "../element/quote";
import Service from "../element/service";
import Slider1 from "../element/slider-1";
import Team from "../element/team";
import Footer from "../layout/footer";
import Header from "../layout/header";
import ModalThank from "./Modal/ModalThank";
function Home() {
  const [isShowModalThank, setIsShowModalThank] = useState(false);
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return (
    <>
      <Header />
      <div className="page-content bg-white" id="top">
        <Slider1 />
        {/* <Clients /> */}
        <WhereCenter></WhereCenter>
        <Service />
        <AboutUs />
        <Counter />
        <Features />
        <Newsletter />
        <Team />
        <Pricing />
        {/* <Testimonial />
        <Blog /> */}
        <Quote setIsShowModalThank={setIsShowModalThank}/>
        <ModalThank isShowModalThank={isShowModalThank} setIsShowModalThank={setIsShowModalThank}></ModalThank>
      </div>
      <Footer />
    </>
  );
}

export default Home;
