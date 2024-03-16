import { useRouter } from 'next/router'
import { FunctionComponent, useEffect } from 'react'
import OcCheckout from '../ordercloud/components/OcCheckout'
import OcCheckoutSummary from '../ordercloud/components/OcCheckout/OcCheckoutSummary'
import OcLineItemList from '../ordercloud/components/OcLineItemList'
import { useOcSelector } from '../ordercloud/redux/ocStore'

const CheckoutPage: FunctionComponent = () => {
  const { push } = useRouter()
  const { order, initialized } = useOcSelector((s) => s.ocCurrentOrder)

  useEffect(() => {
    if (!initialized || !order || (order && !order.LineItemCount)) {
      push('/cart')
    }
  }, [order, initialized, push])

  return initialized ? (
    <div
      style={{ display: 'grid', gridTemplateColumns: `1fr minmax(150px, 25%)` }}
      className="mt-5 px-8 gap-[40px]"
    >
      <OcCheckout onSubmitted={(orderId: string) => push(`/confirmation/${orderId}`)} />
      <div className="gap-2">
        <OcLineItemList />
        <OcCheckoutSummary />
      </div>
    </div>
  ) : null
}

export default CheckoutPage
