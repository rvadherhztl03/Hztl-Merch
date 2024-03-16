import Link from 'next/link'
import { FunctionComponent } from 'react'
import useOcCurrentOrder from '../../hooks/useOcCurrentOrder'
import OcLineItemCard from '../OcLineItemCard'
// import { HiArrowLongRight } from 'react-icons/hi2'
// import { BsBag } from 'react-icons/bs'
import { useOcDispatch } from '../../redux/ocStore'
import { deleteCurrentOrder } from '../../redux/ocCurrentOrder'

interface OcLineItemListProps {
  emptyMessage?: string
  editable?: boolean
}

const OcLineItemList: FunctionComponent<OcLineItemListProps> = ({ emptyMessage, editable }) => {
  const { lineItems } = useOcCurrentOrder()
  const dispatch = useOcDispatch()

  return lineItems && lineItems.length > 0 ? (
    <div className="py-10 flex flex-col gap-3">
      <img src="" />
      <button
        type="button"
        onClick={() => dispatch(deleteCurrentOrder())}
        className="bg-[#7fc3ba] py-2 px-5 text-black text-lg font-bold"
      >
        Clear Cart
      </button>
      {/* Product list */}
      <ol>
        {lineItems.map((li) => (
          <li key={li.ID}>
            <OcLineItemCard lineItem={li} editable={editable} />
          </li>
        ))}
      </ol>
      {/* Checkout Button */}
      <Link href="/checkout" className="text-center">
        <a className="bg-[#7fc3ba] py-2 px-5 block flex items-center gap-2 text-center text-black text-lg justify-center font-bold ">
          Checkout
          {/* <HiArrowLongRight className="inline-block" /> */}
        </a>
      </Link>
    </div>
  ) : (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col justify-center items-center text-center gap-5">
        <img src="cart.png" alt="" className="w-3/4 lg:w-1/2" />
        <h3 className="text-2xl lg:text-4xl">{emptyMessage}</h3>
        <h4 className="text-sm lg:text-xl text-gray-400">
          Looks like you have missed something. Have another Look
        </h4>
      </div>
      <div className="flex justify-center lg:justify-end">
        <Link href={'/'}>
          <a className="bg-[#7fc3ba] py-2 px-5 flex items-center gap-2">
            {/* <BsBag className="inline-block " /> */}
            Continue Shopping
          </a>
        </Link>
      </div>
    </div>
  )
}

export default OcLineItemList
