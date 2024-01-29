import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartslice";

const Shopping = () => {
  const dispatch = useDispatch();
  const { shopStuff } = useSelector((state) => state.cart);
  return (
    <section>
      <div className="shop-container">
        {shopStuff.map((item) => {
          return (
            <div key={item.id} {...item} className="shop-item">
              <img src={item.img} alt={item.title} />
              <div className="shop-item-text-container">
                <h5>{item.title}</h5>
                <h5>${item.price}</h5>
              </div>
              <button
                className="add-item"
                onClick={() => {
                  dispatch(addToCart(item.id));
                }}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Shopping;
