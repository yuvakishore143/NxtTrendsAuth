// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Product = props => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
      />
    </div>
  )
}

export default Product
