import React from 'react'
import CredintialsForm from '../../components/auth/CredintialsForm'
import DefaultLayout from '../../components/layout/DefaultLayout'

function LoginPage() {
  return (
    <DefaultLayout>
      <div className="register-page pt-40">
        <div className="container">
          <CredintialsForm isRegister={false} />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default LoginPage