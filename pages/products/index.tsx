import Link from 'next/link'
import { BuyerProduct } from 'ordercloud-javascript-sdk'
import { FunctionComponent } from 'react'
import OcProductCard from '../../ordercloud/components/OcProductCard'
import OcProductList from '../../ordercloud/components/OcProductList'
import useNextRouterMapping, { NextQueryMap } from '../../ordercloud/hooks/useNextRouterMapping'
import Head from 'next/head'

const queryMap: NextQueryMap = {
  search: 's',
  page: 'p',
  pageSize: 'ps',
  searchOn: 'so',
  sortBy: 'o',
  'xp.size': 'size',
  'xp.color': 'color',
  'xp.test_boolean': 'bool',
  'xp.test_number': 'num',
}

const ProductListPage: FunctionComponent = () => {
  const { options } = useNextRouterMapping(queryMap)
  const handleRenderItem = (p: BuyerProduct) => {
    return (
      <Link href={`/products/${p.ID}`}>
        <OcProductCard product={p} />
      </Link>
    )
  }

  return (
    // isReady && (

    <>
      <Head>
        <title>Products | Hztl Merch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OcProductList options={options} renderItem={handleRenderItem} />
    </>
  )
}

export default ProductListPage
