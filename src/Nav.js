import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./Nav.css";

function Nav() {
  return (
    <div className="main__navbar">
      <div className="navbar__left">
        <MenuRoundedIcon></MenuRoundedIcon>
        <p>All</p>
      </div>
      <div className="navbar__right">
        <p>Amazon miniTV</p>
        <p>Sell</p>
        <p>Best Sellers</p>
        <p>Mobiles</p>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Electronics</p>
        <p>Prime</p>
        <p>New Releases</p>
        <p>Amazon Pay</p>
        <p>Home & Kitchen</p>
        <p>Fashion</p>
        <p>Computers</p>
        <p>Beauty & Personal Care</p>
        <p>Books</p>
      </div>
    </div>
  );
}

export default Nav;
