import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71aJVWrz15L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="Python for Absolute Beginners"
            price="500"
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51sQsEh3gjL.jpg"
            rating={5}
          />
          <Product
            title="Zebronics Jet PRO Premium Wired Gaming On Ear Headphone with LED for Headband + earcups, 40mm Neodymium Drivers, 2 Meter Braided Cable, with mic, Suspension Design, 3.5mm + USB Connector (Black, Blue)"
            price="1,750"
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71PhCZEGH7L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            title="Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact Mechanical Keyboard w/White and Grey Color Keycaps, Linear Red Switch, Pro Driver/Software Supported"
            price="2,500"
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/610P9MPegbL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="Amazon Basics Multipurpose Foldable Laptop Table with Cup Holder, Brown"
            price="550"
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71o7JQm59sL._AC_UL400_.jpg"
            rating={4}
          />
          <Product
            title="TABLE MAGIC Multipurpose Laptop Table Mat Finish Top PP Steel Metal 52.5 * 40 * 73cm 6 Heights 3 Angles Adjustable Foldable (Alder, Modern Without footrest)"
            price="1,500"
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81p9hTWkb-L._AC_UL640_QL65_.jpg"
            rating={5}
          />

          {/* product  */}
        </div>

        <div className="home__row">
          {/* product  */}
          {/* product  */}
          {/* product  */}
        </div>
      </div>
    </div>
  );
}

export default Home;
