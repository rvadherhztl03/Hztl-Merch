import { Spec } from 'ordercloud-javascript-sdk'
import { FormEvent, FunctionComponent, useCallback, useEffect, useState } from 'react'
import useOcProductDetail from '../../hooks/useOcProductDetail'
import { createLineItem, updateLineItem } from '../../redux/ocCurrentOrder'
import { useOcDispatch, useOcSelector } from '../../redux/ocStore'

import OcQuantityInput from '../OcQuantityInput'
import OcProductSpecField from './OcProductSpecField'
import Shoe from '../../../components/Shoe'

interface OcProductDetailProps {
  productId: string
  lineItemId?: string
  onLineItemAdded?: () => void
  onLineItemUpdated?: () => void
}

const determineDefaultOptionId = (spec: Spec) => {
  if (spec.DefaultOptionID) return spec.DefaultOptionID
  return spec.OptionCount ? spec.Options[0].ID : undefined
}

const OcProductDetail: FunctionComponent<OcProductDetailProps> = ({
  productId,
  lineItemId,
  onLineItemAdded,
  onLineItemUpdated,
}) => {
  const dispatch = useOcDispatch()
  const { product, specs } = useOcProductDetail(productId)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false)

  const [specValues, setSpecValues] = useState([])

  const lineItem = useOcSelector((s) =>
    lineItemId && s.ocCurrentOrder.lineItems
      ? s.ocCurrentOrder.lineItems.find((li) => li.ID === lineItemId)
      : undefined
  )

  useEffect(() => {
    if (lineItem) {
      setSpecValues(lineItem.Specs)
    } else if (specs) {
      setSpecValues(
        specs.map((s) => {
          return {
            SpecID: s.ID,
            OptionID: determineDefaultOptionId(s),
            Value: s.DefaultValue ? s.DefaultValue : undefined,
          }
        })
      )
    }
  }, [specs, lineItem])

  const [quantity, setQuantity] = useState(lineItem ? lineItem.Quantity : 0)

  const handleSpecFieldChange = (values: { SpecID: string; OptionID?: string; Value?: string }) => {
    setSpecValues((sv) =>
      sv.map((s) => {
        if (s.SpecID === values.SpecID) {
          return {
            SpecID: values.SpecID,
            OptionID: values.OptionID === 'OpenText' ? undefined : values.OptionID,
            Value: values.Value,
          }
        }
        return s
      })
    )
  }

  const handleAddToCart = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      setLoading(true)
      await dispatch(
        createLineItem({ ProductID: product.ID, Quantity: quantity, Specs: specValues })
      )
      setLoading(false)
      if (onLineItemAdded) {
        onLineItemAdded()
      }
    },
    [dispatch, product, quantity, onLineItemAdded, specValues]
  )

  const handleUpdateCart = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      setLoading(true)
      await dispatch(updateLineItem({ ...lineItem, Quantity: quantity, Specs: specValues }))
      setLoading(false)
      if (onLineItemUpdated) {
        onLineItemUpdated()
      }
    },
    [dispatch, lineItem, quantity, onLineItemUpdated, specValues]
  )
  const query = window.location.search
  console.log('@@query', query)
  return product ? (
    // <div>
    //   <h2>{product.Name}</h2>
    //   <b>{formatPrice(product.PriceSchedule.PriceBreaks[0].Price)}</b>
    //   {/* eslint-disable-next-line */}
    //   <p>{product.Description}</p>
    //   <form onSubmit={lineItem ? handleUpdateCart : handleAddToCart}>
    //     {specs &&
    //       specs.map((s) => {
    //         const specValue = specValues.find((sv) => sv.SpecID === s.ID)
    //         return (
    //           <OcProductSpecField
    //             key={s.ID}
    //             spec={s}
    //             onChange={handleSpecFieldChange}
    //             optionId={specValue && specValue.OptionID}
    //             value={specValue && specValue.Value}
    //           />
    //         )
    //       })}
    //     <OcQuantityInput
    //       controlId="addToCart"
    //       priceSchedule={product.PriceSchedule}
    //       quantity={quantity}
    //       onChange={setQuantity}
    //     />
    //     <button type="submit" disabled={loading}>
    //       {`${lineItem ? 'Update' : 'Add To'} Cart`}
    //     </button>
    //   </form>
    // </div>
    <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div
          className={`md:flex  items-center -mx-10 ${
            product?.Name == 'Nike Shoe' && 'flex-col gap-[40px]'
          }`}
        >
          <div
            className={`w-full  px-10 mb-10 md:mb-0 ${
              product?.Name == 'Nike Shoe' ? '' : 'md:w-1/2'
            }`}
          >
            <div className="relative">
              {product?.Name == 'Nike Shoe' ? (
                <Shoe />
              ) : (
                <img src={product.xp.Images[0]} className="w-full relative z-10" alt="" />
              )}
              {/* <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div> */}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5">{product.Name}</h1>
              <p className="text-sm">{product.Description} </p>
            </div>
            <div>
              <div className="inline-block align-bottom mr-5">
                <span className="text-2xl leading-none align-baseline">$</span>
                <span className="font-bold text-5xl leading-none align-baseline">59</span>
                <span className="text-2xl leading-none align-baseline">.99</span>
              </div>
              <div className="inline-block align-bottom">
                <form onSubmit={lineItem ? handleUpdateCart : handleAddToCart}>
                  {specs &&
                    specs.map((s) => {
                      const specValue = specValues.find((sv) => sv.SpecID === s.ID)
                      return (
                        <OcProductSpecField
                          key={s.ID}
                          spec={s}
                          onChange={handleSpecFieldChange}
                          optionId={specValue && specValue.OptionID}
                          value={specValue && specValue.Value}
                        />
                      )
                    })}
                  {/* <OcQuantityInput
                    controlId="addToCart"
                    priceSchedule={product.PriceSchedule}
                    quantity={quantity}
                    onChange={setQuantity}
                  /> */}
                  <OcQuantityInput
                    controlId="addToCart"
                    priceSchedule={product.PriceSchedule}
                    quantity={quantity}
                    onChange={setQuantity}
                  />
                  {quantity > 0 && (
                    <a
                      href={'/cart'}
                      className="bg-yellow-300 opacity-75 hover:opacity-100 block mt-6 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                    >
                      Checkout
                    </a>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default OcProductDetail
