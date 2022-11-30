import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

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
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.ui);

  useEffect(() => {
    if (notifications.length > 0) {
      console.log('first')
      const removeInterval = setTimeout(() => {
        dispatch(uiActions.deleteNotification());
      }, 3000);

      return () => {
        clearTimeout(removeInterval);
      };
    }
  }, [notifications.length]);

  return (
    <div className="notifications-box d-flex flex-column gap-10">
      {notifications.map((notification) => (
        <NotificationItem key={notification} title={notification} />
      ))}
    </div>
  );
}

export default Notifications;
