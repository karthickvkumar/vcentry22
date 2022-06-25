import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import ProductComponent from "../components/product";
import ProductPreviewComponent from "../components/product-preview";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HomePage = () => {
  const [recentProduct, setRecentProduct] = useState([]);
  const [productPreview, setProductPreview] = useState({
    recentlyViewed : [],
    topNew : [],
    topSelling : []
  });

  useEffect(() => {
    loadRecentProduct();
    loadProductPreview();
  }, []);

  const loadRecentProduct = () => {
    const url = "https://shop143.herokuapp.com/telebuy/api/products/latest";
    axios
      .get(url)
      .then((response) => {
        setRecentProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadProductPreview = () => {
    const url = "https://shop143.herokuapp.com/telebuy/api/product/preview";
    axios.get(url)
      .then((response) => {
        setProductPreview(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  const latestProductList = recentProduct.map((value, index) => {
    return <ProductComponent {...value} key={index}></ProductComponent>;
  });

  const recentlyViewed = productPreview.recentlyViewed.map((value, index) => {
    return(
      <ProductPreviewComponent {...value} key={index}></ProductPreviewComponent>
    )
  })
  
  const topNew = productPreview.topNew.map((value, index) => {
    return(
      <ProductPreviewComponent {...value} key={index}></ProductPreviewComponent>
    )
  })
  
  const topSelling = productPreview.topSelling.map((value, index) => {
    return(
      <ProductPreviewComponent {...value} key={index}></ProductPreviewComponent>
    )
  })

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
      <div className="maincontent-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="latest-product">
                <h2 className="section-title">Latest Products</h2>
                <div className="product-carousel">{latestProductList}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="promo-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo1">
                <i className="fa fa-refresh"></i>
                <p>30 Days return</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo2">
                <i className="fa fa-truck"></i>
                <p>Free shipping</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo3">
                <i className="fa fa-lock"></i>
                <p>Secure payments</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo4">
                <i className="fa fa-gift"></i>
                <p>New products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-widget-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-product-widget">
                <h2 className="product-wid-title">Top Sellers</h2>
                <a href="" className="wid-view-more">
                  View All
                </a>
                {topSelling}
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-product-widget">
                <h2 className="product-wid-title">Recently Viewed</h2>
                <a href="#" className="wid-view-more">
                  View All
                </a>
               {recentlyViewed}
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-product-widget">
                <h2 className="product-wid-title">Top New</h2>
                <a href="#" className="wid-view-more">
                  View All
                </a>
              
               {topNew}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default HomePage;
