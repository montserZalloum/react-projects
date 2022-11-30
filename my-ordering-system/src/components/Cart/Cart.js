import React, { useContext } from "react";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import cartContext from "../../store/cart-context";
function Cart(props) {
  const cartCtx = useContext(cartContext)
  const items = cartCtx.items.map(
    (item) => (
      <CartItem
        key={item.id}
        name={item.name}
      />
    )
  );

  return (
    <>
      <Modal onClose={props.onClose}>{items}</Modal>
    </>
  );
}

export default Cart;
