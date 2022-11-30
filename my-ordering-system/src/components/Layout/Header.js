import React from 'react'
import CartHeaderButton from './CartHeaderButton'

function Header(props) {
  

  return (
    <>
      <div className='bg-main pt-20 pb-20 d-flex align-center space-between p-side-10'>
          <p>ORDER</p>
          <CartHeaderButton onClick={props.onShowCart} />
      </div>
    </>
  )
}

export default Header