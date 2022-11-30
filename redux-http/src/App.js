import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Notification from "./components/UI/Notification";

import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { fetchCartData, sendCartRequest } from "./store/cart-actions";

let isInitial = true

function App() {
  const dispatch = useDispatch();
  const isShowCart = useSelector((state) => state.ui.cartIsVisible);
  const {cart} = useSelector((state) => state);
  const {notification} = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(fetchCartData())
  }, []);
  
  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return 
    }
    if (cart.changed)
      dispatch(sendCartRequest(cart))
  }, [cart]);

  

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
      <Layout>
        {isShowCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
