import { FunctionComponent } from 'react'
import OcLineItemList from '../ordercloud/components/OcLineItemList'

const CartPage: FunctionComponent = () => {
  return (
    <div className="container relative py-10">
      <OcLineItemList emptyMessage="Your shopping cart is empty" editable />
    </div>
  )
}

export default CartPage
