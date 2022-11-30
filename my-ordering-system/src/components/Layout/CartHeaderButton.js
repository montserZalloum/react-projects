import { useContext, useEffect, useState } from "react"
import cartContext from "../../store/cart-context"

function CartHeaderButton(props) {
  const cartCtx = useContext(cartContext)
  const [isBtnHighlighted,setIsBtnHighlighted] = useState(false)
  const {totalAmount} = cartCtx
  const btnClasses = `white trans ${isBtnHighlighted ? 'animate' : ''}`
  useEffect(()=>{
    if (totalAmount == 0) {
      return ;
    }
    setIsBtnHighlighted(true)
    const timer = setTimeout(()=>{
      setIsBtnHighlighted(false)
    },300)
    return ()=>{
      clearTimeout(timer)
    }
  },[totalAmount])

  return (
    <div className={btnClasses} onClick={props.onClick}>
        Your Cart <span>{cartCtx.totalAmount}</span>
    </div>
  )
}

export default CartHeaderButton