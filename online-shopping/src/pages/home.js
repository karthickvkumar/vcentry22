import React from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomePage = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <Carousel autoPlay={true}>
        <div>
            <img src={require("../images/h4-slide.png")} />
        </div>
        <div>
            <img src={require("../images/h4-slide2.png")} />
        </div>
        <div>
            <img src={require("../images/h4-slide3.png")} />
        </div>
        <div>
            <img src={require("../images/h4-slide4.png")} />
        </div>
      </Carousel>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default HomePage;