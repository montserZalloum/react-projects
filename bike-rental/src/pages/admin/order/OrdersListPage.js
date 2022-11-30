import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../../components/admin/layout/AdminLayout'
import OrdersList from '../../../components/admin/order/OrdersList'
import useHttp from '../../../hooks/useHttp'

function OrdersListPage() {
  const {sendRequest,isLoading} = useHttp()
  const [ordersList,setOrdersList] = useState([])
  const headerOptions = (
    <Link to="/admin/orders/new" className="btn w-25 pt-10 pb-10">
      New
    </Link>
  );

    useEffect(()=> {
      getData();
    },[])

    const getData = () => {
      const storeData = (data) => {
        setOrdersList(data)
      } 
      sendRequest({
        method: 'GET',
        url: 'order'
      },storeData)
    }

    let content = ''
    if (isLoading) {
      content = <h1 className='center'>Loading...</h1>
    } else if (ordersList.length > 0)
      content = <OrdersList refreshData={getData} data={ordersList} />
    else
      content = <h1 className='center'>No Data</h1>

  return (
    <AdminLayout title="Orders List" header={headerOptions}>
        {content}
    </AdminLayout>
  )
}

export default OrdersListPage