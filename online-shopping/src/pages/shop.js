import React, {useState, useEffect} from 'react';
import axios from "axios";
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import ProductComponent from '../components/product';

const ShopPage = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    loadProduct();
  }, [])

  const loadProduct = () => {
    const url = "https://shop143.herokuapp.com/telebuy/api/products";
    axios.get(url)
      .then((response) => {
        console.log(response)
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const productList = product.map((value, index) => {
    return(
      <div className="col-md-3 col-sm-6" key={index}>
        <ProductComponent {...value}></ProductComponent>
      </div>
    )
  })

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="product-big-title-area">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="product-bit-title text-center">
                          <h2>Smartphones</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                
              {productList}

            </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default ShopPage;