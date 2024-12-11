import Slider from "react-slick";

import "./Banner.css"

import Image3 from '../../assets/banner-1.png';

function Banner() {
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
                <div><img src={Image3} alt="Criar ou Migrar seu e-commerce?" /></div>
                <div><img src={Image3} alt="Criar ou Migrar seu e-commerce?" /></div>
                <div><img src={Image3} alt="Criar ou Migrar seu e-commerce?" /></div>
                <div><img src={Image3} alt="Criar ou Migrar seu e-commerce?" /></div>
            </Slider>
        </div>
    )
  }
  
  export default Banner