import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

function NotificationItem(props) {
    const removeHandler = (e) => {
      console.log(e);
    };
    return (
      <div onClick={removeHandler} className="notification-item">
        {props.title}
      </div>
    );
  }


function Notifications() {
  const { notifications } = useSelector((state) => state.ui);
  const dispatch = useDispatch()
  useEffect(()=> {
      if (notifications.length > 0) {
        const timer = setTimeout(()=>{
            dispatch(uiActions.deleteNotification());
        },3000);
        return ()=>{
            clearTimeout(timer);
        }
    }
  },[notifications.length]);

  return (
    <div className="notifications-box d-flex flex-column gap-10">
      {notifications.map((notification) => (
        <NotificationItem key={notification} title={notification} />
      ))}
    </div>
  );
}

export default Notifications;
