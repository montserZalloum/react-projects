import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/layout/Header'
import MyOrdersList from '../components/order/MyOrdersList'
import useHttp from '../hooks/useHttp';
import { uiActions } from '../store/ui-slice';

function MyOrdersPage() {
  const dispatch = useDispatch()
  const {userData} = useSelector((state)=> state.user);
  const {sendRequest,isLoading} = useHttp();
  const [myOrders,setMyOrders] = useState([])

  useEffect(()=> {
    const storeOrders = (data,err) => {
      if (err) {
        dispatch(uiActions.showNotification('Something went wrong!'))
      } else {
        setMyOrders(data) 
      }
    }
    sendRequest({
      method: 'GET',
      url: `order?userID=${userData.id}`
    },storeOrders)
  },[]);

  return (
    <>
      <Header />
      {isLoading && <h1 className='center container'>Loading...</h1>}
      {(!isLoading && myOrders.length > 0) ? <MyOrdersList data={myOrders} /> : <h1>No Orders</h1>}
      
    </>
  )
}

export default MyOrdersPage