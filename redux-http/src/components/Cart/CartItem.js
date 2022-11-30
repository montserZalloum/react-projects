import { useDispatch } from 'react-redux';
import {cartActions} from '../../store/cart-slice'
import classes from './CartItem.module.css';

const CartItem = (props) => {

  const dispatch = useDispatch(cartActions)
  const { id,title, quantity, total, price } = props.item;

  const onRemoveHandler = () => {
    dispatch(cartActions.removeItem(id))
  }
  const onAddHandler = () => {
    dispatch(cartActions.addItemToCart({
      title,
      price,
      quantity,
      id
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveHandler}>-</button>
          <button onClick={onAddHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
