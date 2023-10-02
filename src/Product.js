import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <br />
          <sup>
            <small>₹</small>
          </sup>
          <strong>{price}</strong>
          <sup>00</sup>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <br />
      <img src={image} alt=""></img>
      <button type="submit"> Add to Cart</button>
    </div>
  );
}

export default Product;
