import Banner from "../../components/Banner/Banner"
import Header from "../../components/Header/Header"
import Product from "../../components/Product/Product";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

    return (
        <>
         <Header/>
         <Banner/>
         <Product />
        </>
    )
  }
  
  export default Home