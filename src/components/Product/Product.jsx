
import "./Product.css"

import Flag from '../../assets/flag.png'

function Product(props) {
  const { imageUrl, productName, price, listPrice, installments, stars } = props

  return (
    <div className="product">
      <div className="product-container">

        {
          listPrice && (     <div className="flag">
            <img src={Flag} width="80px" alt="product name" />
          </div>)
        }

        <div className="product-image">
            <img src={imageUrl} width="216px" alt="OFF" />
        </div>

        <div className="product-info">
          <h3 className="product-name">{ productName}</h3>
          <div className="product-review">
            <Review number={stars} />
          </div>
          <div className="product-prices">
            {listPrice && (<div className="list-price">de R$ {listPrice}</div>)}
            
            <div className="best-price">por R$ {price}</div>

            {!!installments?.length && (<div className="installments">ou em {installments[0].quantity}x de R$ {installments[0].value}</div>)}
            
          </div>
          <button className="product-buy">Comprar</button>
        </div>
      </div>
    </div>
  )
}

function Review(props){
  switch (props.number) {
    case 1:
      return (
        <>
          <Star />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
        </>
      )

    case 2:
        return (
          <>
            <Star />
            <Star />
            <StarEmpty />
            <StarEmpty />
            <StarEmpty />
          </>
        )

    case 3:
        return (
          <>
            <Star />
            <Star />
            <Star />
            <StarEmpty />
            <StarEmpty />
          </>
        )

    case 4:
        return (
          <>
            <Star />
            <Star />
            <Star />
            <Star />
            <StarEmpty />
          </>
        )

    case 5:
        return (
          <>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </>
        )
  
    default:
      return (
        <>
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
        </>
      )
  }
}

function Star(){
  return (
    <>
      <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z" fill="#F8475F"/>
        </svg>
    </>
  )
}

function StarEmpty(){
  return (
    <>
      <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.3896 4.4595L7.29501 4.13318L5.69478 0.648972L4.09454 4.13845L0 4.4595L3.10935 6.94897L2.17541 10.649L5.69478 8.68581L9.21415 10.649L8.2859 6.94897L11.3896 4.4595ZM5.69477 7.70161L3.55353 8.89634L4.12301 6.64371L2.23234 5.12792L4.72666 4.92792L5.69477 2.80687L6.66857 4.93319L9.16289 5.13319L7.27222 6.64897L7.8417 8.90161L5.69477 7.70161Z" fill="#F8475F"/>
      </svg>
    </>
  )
}

export default Product
