import React from "react";
import {
  removeItem,
  decreaseAmount,
  increaseAmount,
} from "../features/cartslice";
import { useDispatch } from "react-redux";

const CartItems = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <div className="button">
        <button
          onClick={() => {
            dispatch(increaseAmount(id));
          }}
        >
          +
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            if (amount < 2) {
              dispatch(removeItem(id));
            } else {
              dispatch(decreaseAmount(id));
            }
          }}
        >
          -
        </button>
      </div>
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <button
        className="remove"
        onClick={() => {
          dispatch(removeItem(id));
        }}
      >
        REMOVE
      </button>
      <h3>$ {(price * amount).toFixed(2)}</h3>
    </div>
  );
};

export default CartItems;
