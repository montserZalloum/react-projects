import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

const showNotification = (dispatch,status, title, message) => {
  dispatch(
    uiActions.showNotification({
      status,
      title,
      message,
    })
  );
};
export const sendCartRequest = (cart) => {
  return async (dispatch) => {
    showNotification(dispatch,"pending", "Sending...", "Sending Cart data!");
    const sendRequest = async () => {
      const response = await fetch(
        `https://react-projects-79a2a-default-rtdb.firebaseio.com/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("sending data failed!");
      }
    };
    try {
      await sendRequest();
      showNotification(dispatch,"success", "Success!", "Sent cart done!");
    } catch {
      showNotification(dispatch,"error", "Error!", "Something went wrong!");
    }
  };
};

export const fetchCartData = () =>{
  return async (dispatch)=>{
    const fetchData = async ()=>{
      const response = await fetch(
        `https://react-projects-79a2a-default-rtdb.firebaseio.com/cart.json`
      );
      if (!response.ok) {
        throw new Error("sending data failed!");
      }
      const data = await response.json()
      return data
    }

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData))
    } catch {
      showNotification(dispatch,"error", "Error!", "Something went wrong!");
    }
    
  }
}