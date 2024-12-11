
import "./ProductList.css"
import { useEffect, useState } from "react"
import Product from "../Product/Product"
import axios from "axios"
import Slider from "react-slick";

function ProductList() {
  const [product, setProduct] = useState([])

  useEffect(()=>{
    async function getData(){
      const { data } = await axios.get("https://corebiz-test-server.onrender.com/api/v1/products")
      setProduct(data)
    }

    getData()
  }, [0])

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  return (
    <div className="product-list">
      <div className="product-container">
        <h4>Mais Vendidos</h4>

        <Slider {...settings}>
          {
            product.map((product, i) => {
              return <Product key={`${product.id}-${i}`} {...product} />
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default ProductList
