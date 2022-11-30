import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const history = useHistory()
  const dispatch = useDispatch(authActions)

  const is = useSelector(state=> state.auth)

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setIsLoading] = useState(false)
  const emailRef = useRef();
  const passwordRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    setIsLoading(true)
    let url ;
    if (isLogin) {
       url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzj7Fuk0-ZEf8n8u93ELpnPd0sEbNnh-w`
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDzj7Fuk0-ZEf8n8u93ELpnPd0sEbNnh-w'
    }
    fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      }
    ).then(res=>{
      setIsLoading(false)
      if (res.ok) {
        return res.json()
      } else {
        return res.json().then(data=>{
          let errorMsg = data.error.message
          throw new Error(errorMsg)
        })
      }
    }).then(data => {
      dispatch(authActions.login({token:data.idToken}))
      history.replace('/')
    }).catch(error=>{
      alert(error)
    });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={passwordRef} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? "Login" : "Create Account"}</button>}
          {isLoading && <p>Loading...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
