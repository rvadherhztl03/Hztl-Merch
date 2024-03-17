import { BuyerProduct } from 'ordercloud-javascript-sdk'
import { FunctionComponent } from 'react'
import useOcProductList from '../../hooks/useOcProductList'
import { OcProductListOptions } from '../../redux/ocProductList'
import OcProductCard from '../OcProductCard'

export interface OcProductListProps {
  options?: OcProductListOptions
  renderItem?: (product: BuyerProduct) => JSX.Element
}

const OcProductList: FunctionComponent<OcProductListProps> = ({ options, renderItem }) => {
  const products = useOcProductList(options)
  return (
    <div className="flex gap-4 justify-center flex-wrap gap-y-[40px]">
      {products && products?.length > 0 ? (
        products.map((p) => (
          <div className="flex" key={p.ID}>
            {renderItem ? renderItem(p) : <OcProductCard product={p} />}
          </div>
        ))
      ) : (
        <div className="text-2xl mt-4 font-bold justify-between flex items-center min-h-screen w-full text-center ">
          <div className="w-full">
            Please Login First !
            <a href="/login" className="ml-4 text-grey-700 transition-all hover:text-[#7fc3ba]">
              Login here
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default OcProductList
