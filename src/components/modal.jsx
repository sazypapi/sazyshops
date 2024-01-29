import React from "react";
import { closeModal } from "../features/modalslice";
import { clearCart } from "../features/cartslice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h3>Do you want to clear your cart?</h3>
        <div className="modal-button">
          <button
            className="modal-confirm"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            className="modal-cancel"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
