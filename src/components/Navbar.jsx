import React from "react";
import logo from "../assets/logo.png";
import icon from "../assets/shopping icon.png";
import { useSelector, useDispatch } from "react-redux";
import { closeCart, openCart } from "../features/cartslice";

const Navbar = () => {
  const { amount, isClicked } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <nav>
      <img src={logo} alt="Sazy Shops " />
      <div>
        <div className="amount">
          <img src={icon} alt="Cart Icon" />
          <span>{amount}</span>
        </div>
        <div>
          {isClicked ? (
            <button className="view-cart" onClick={() => dispatch(closeCart())}>
              View Shop
            </button>
          ) : (
            <button className="view-cart" onClick={() => dispatch(openCart())}>
              View Cart
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
