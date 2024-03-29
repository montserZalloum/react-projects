import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from './store/cart-provider'
function App() {
  const [isCartShown,setIsCartShown] = useState(false)
  const showCartHandler = ()=>{
    setIsCartShown(true)
  }
  const hideCartHandler = () => {
    setIsCartShown(false)
  }
  return (
    <CartProvider>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main className="mt-50 p-side-10">
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
