import React from "react";
import CartItems from "./CartItems";
import { useSelector, useDispatch } from "react-redux";
import emptybag from "../assets/empty bag.png";
import { clearCart, total } from "../features/cartslice";
import { openModal } from "../features/modalslice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="empty-bag">
        <h1>Your cart is currently empty</h1> <img src={emptybag}></img>
      </section>
    );
  }
  return (
    <section className="cart-container">
      <div className="first-part">
        <h5 style={{ textAlign: "left" }}>
          You have {amount} items in you cart
        </h5>
        <div>
          {cartItems.map((item) => {
            return <CartItems key={item.id} {...item}></CartItems>;
          })}
        </div>
      </div>
      <div className="second-part">
        <h4>Order Summary</h4>
        <div className="second-part-text">
          <div>
            <p>Item Balance</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div>
            <p>Tax (0.5%)</p>
            <p>${(total * 0.05).toFixed(2)}</p>
          </div>
          <div>
            <p>Total Balance</p>
            <p>${(total + total * 0.05).toFixed(2)}</p>
          </div>
          <button
            className="checkout"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            CHECKOUT
          </button>
          <button
            className="checkout"
            onClick={() => {
              dispatch(openModal());
            }}
          >
            CLEAR CART
          </button>
        </div>
      </div>
    </section>
  );
};
export default Cart;
