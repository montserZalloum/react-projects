import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import UsersListPage from "./pages/admin/user/UsersListPage";
import BikesListPage from "./pages/admin/bike/BikesListPage";
import OrdersListPage from "./pages/admin/order/OrdersListPage";
import UserFormPage from "./pages/admin/user/UserFormPage";
import BikeFormPage from "./pages/admin/bike/BikeFormPage";

import Notifications from "./components/ui/Notifications";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import BikePage from "./pages/BikePage";
import OrderFormPage from "./pages/admin/order/OrderFormPage";
import MyOrdersPage from "./pages/MyOrdersPage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/bike-details/:bikeID" element={<BikePage />}></Route>
        <Route path="/my-orders" element={<MyOrdersPage />}></Route>


      {/* Admin Pages */}

        <Route path="/admin" element={<AdminPage />}></Route>
        {/* user */}
        <Route path="/admin/users" element={<UsersListPage />}></Route>
        <Route path="/admin/users/new" element={<UserFormPage />}></Route>
        <Route path="/admin/user/:userID" element={<UserFormPage />}></Route>
        {/* end user */}
        {/* bike */}
        <Route path="/admin/bikes" element={<BikesListPage />}></Route>
        <Route path="/admin/bikes/new" element={<BikeFormPage />}></Route>
        <Route path="/admin/bike/:bikeID" element={<BikeFormPage />}></Route>
        {/* end bike */}
        
        {/* order */}
        <Route path="/admin/orders" element={<OrdersListPage />}></Route>
        <Route path="/admin/orders/new" element={<OrderFormPage />}></Route>
        <Route path="/admin/order/:orderID" element={<OrderFormPage />}></Route>
        {/* end order */}

      </Routes>
      <Notifications />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
