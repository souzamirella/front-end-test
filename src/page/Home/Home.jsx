import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import Banner from "../../components/Banner/Banner"
import Header from "../../components/Header/Header"
import ProductList from "../../components/ProductList/ProductList";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";


function Home() {
    const [isMobile] = useState(window.innerWidth <= 920);
    return (
        <>
            {isMobile ? <HeaderMobile/> : <Header/>}
            <Banner/>
            <ProductList />
            <Newsletter />
            <Footer />
        </>
    )
  }
  
  export default Home