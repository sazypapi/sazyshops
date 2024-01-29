import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Shopping from "./components/Shopping";
import { useEffect } from "react";
import { total } from "./features/cartslice";
import Modal from "./components/modal";

function App() {
  const { cartItems,isClicked } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(total());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal></Modal>}
      <Navbar></Navbar>
      {isClicked && <Cart></Cart>}
      {isClicked || <Shopping></Shopping>}
    </main>
  );
}

export default App;
