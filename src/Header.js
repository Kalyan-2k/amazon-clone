import React from "react";
import "./Header.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      ></img>

      <div className="location">
        <LocationOnOutlinedIcon className="header__locationicon"></LocationOnOutlinedIcon>
      </div>

      <div className="header__option">
        <span className="header__optionLineOne">Hello</span>
        <span className="header__optionLineTwo">Select your address</span>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>

      <div className="header__nav">
        <div className="header__option">
          {/* <span className="header__country">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlJeXMZx_Qk9XD43shNib1vJr9yHOg9_Nxg&usqp=CAU"
              alt=""
            />
          </span> */}
          <span className="header__language">EN</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Hello, sign in</span>
          <span className="header__optionLineTwo">Accounts & Lists</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__optionBasket">
          <span className="header__optionLineOne header__basketcount">0</span>
          <span>
            <ShoppingCartOutlinedIcon className="header__cart"></ShoppingCartOutlinedIcon>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
