import Slider from "react-slick";

import "./Banner.css"

import Banner1 from '../../assets/banner-1.png';
import Banner1Mobile from '../../assets/banner-1-mobile.png';
import Banner2 from '../../assets/banner-2.png';
import Banner2Mobile from '../../assets/banner-2-mobile.png';
import Banner3 from '../../assets/banner-3.png';
import Banner3Mobile from '../../assets/banner-3-mobile.png';

import { useState } from "react";

function Banner() {
    const [isMobile] = useState(window.innerWidth <= 767);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="main-banner">
            <Slider {...settings}>
                <div><img src={isMobile ? Banner1Mobile : Banner1} alt="Criar ou Migrar seu e-commerce?" /></div>
                <div><img src={isMobile ? Banner2Mobile : Banner2} alt="Criar ou Migrar seu e-commerce?" /></div>
                <div><img src={isMobile ? Banner3Mobile : Banner3} alt="Criar ou Migrar seu e-commerce?" /></div>
            </Slider>
        </div>
    )
  }
  
  export default Banner