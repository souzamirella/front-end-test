import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner from "../../components/Banner/Banner"
import Header from "../../components/Header/Header"
import ProductList from "../../components/ProductList/ProductList";
import Newsletter from "../../components/Newsletter/Newsletter";


function Home() {

    return (
        <>
         <Header/>
         <Banner/>
         <ProductList />
         <Newsletter />
        </>
    )
  }
  
  export default Home