import React from "react";
import "./Checkout.css";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__tile1">
          <img
            className="checkout__ad"
            src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
            alt=""
          />
          <div className="info">
            <h2 className="checkout__title">Your Amazon Cart is empty</h2>
            <p>Shop today’s deals</p>
            <br />
            <br />
            <span>
              <button className="login" type="button">
                Sign in to your account
              </button>
              <button className="signup" type="button">
                Sign up now
              </button>
            </span>
          </div>
        </div>
        <div className="checkout__tile2">
          <div className="saved__items"></div>
          <p>
            The price and availability of items at Amazon.in are subject to
            change. The shopping cart is a temporary place to store a list of
            your items and reflects each item's most recent price.
          </p>
        </div>
      </div>
      <div className="checkout__right"></div>
    </div>
  );
}

export default Checkout;
