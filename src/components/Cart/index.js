// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Cart = props => {
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
      />
    </div>
  )
}

export default Cart
