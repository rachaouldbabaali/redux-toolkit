import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./feature/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  const { isOpen } = useSelector((state) => state.modal);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
