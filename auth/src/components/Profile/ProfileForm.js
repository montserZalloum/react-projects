import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authActions } from '../../store/auth-slice';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const dispatch = useDispatch(authActions)
  const {token} = useSelector(state=> state.auth)
  const history = useHistory()

  const passwordRef = useRef()
  const submitHandler= (e)=>{
    e.preventDefault();
    const password = passwordRef.current.value
    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDzj7Fuk0-ZEf8n8u93ELpnPd0sEbNnh-w',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: token,
          password,
          returnSecureToken: false,
        }),
      }
    ).then(res=>{
      if (res.ok) {
        return res.json()
      } else {
        return res.json().then(data=>{
          let errorMsg = data.error.message
          throw new Error(errorMsg)
        })
      }
    }).then(data => {
      dispatch(authActions.login({token: data.idToken}))
      history.replace('/')
    }).catch(error=>{
      alert(error)
    });
  }


  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={passwordRef} type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
