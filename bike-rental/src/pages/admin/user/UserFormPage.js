import React from 'react'
import AdminLayout from '../../../components/admin/layout/AdminLayout'
import UserForm from '../../../components/admin/user/UserForm'

function UserFormPage() {
  
  return (
    <AdminLayout title="User Form">
        <UserForm />
    </AdminLayout>
  )
}

export default UserFormPage