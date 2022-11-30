import {useDispatch, useSelector} from 'react-redux'
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state=> state.counter)

  const incrementHandler = ()=>{
    dispatch(counterActions.increment())
  }
  const incrementBy5Handler = ()=>{
    // dispatch(counterActions.increase(5))
  }
  const decrementHandler = ()=>{
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    // dispatch(counterActions.toggle)
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={incrementBy5Handler}>increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
