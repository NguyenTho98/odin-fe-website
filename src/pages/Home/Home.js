import { useEffect } from "react";
import React from 'react';
import WhereCenter from "../../component/where";
import AboutUs from "../../element/aboutUs";
import Counter from "../../element/counter";
import Newsletter from "../../element/newsletter";
import Features from "../../element/our-features";
import Pricing from "../../element/pricing";
import Quote from "../../element/quote";
import Service from "../../element/service";
import Slider1 from "../../element/slider-1";
import Team from "../../element/team";

function Home(props) {
  const { setIsShowModalThank } = props;
  return (
    <>
        <Slider1 />
        <WhereCenter></WhereCenter>
        <Service />
        <AboutUs />
        <Counter />
        <Features />
        <Newsletter />
        <Team />
        <Pricing />
        <Quote setIsShowModalThank={setIsShowModalThank}/>
    </>
  );
}

export default Home;
