import React from 'react';

const ProductPreviewComponent = (props) => {
  return (
    <div className="single-wid-product">
        <a href="single-product.html">
          <img
            src={props.image}
            alt=""
            className="product-thumb"
          />
        </a>
        <h2>
          <a href="#">{props.name}</a>
        </h2>
        <div className="product-wid-rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="product-wid-price">
          <ins>{props.discount_price}</ins> <del>{props.actual_price}</del>
        </div>
      </div>
  );
};

export default ProductPreviewComponent;