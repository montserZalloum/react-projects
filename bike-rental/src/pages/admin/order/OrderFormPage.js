import React from 'react'
import AdminLayout from '../../../components/admin/layout/AdminLayout'
import OrderForm from '../../../components/admin/order/OrderForm'

function OrderFormPage() {
  return (
    <AdminLayout title="Bike Form">
      <OrderForm />
    </AdminLayout>
  )
}

export default OrderFormPage