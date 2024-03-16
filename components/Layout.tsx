import Head from 'next/head'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import logout from '../ordercloud/redux/ocAuth/logout'
import { useOcDispatch, useOcSelector } from '../ordercloud/redux/ocStore'
// import { Button } from '../@/components/ui/button'

const Layout: FunctionComponent = ({ children }) => {
  const dispatch = useOcDispatch()

  const { isAnonymous, loading, lineItemCount } = useOcSelector((s) => ({
    user: s.ocUser.user,
    loading: s.ocAuth.loading,
    isAnonymous: s.ocAuth.isAnonymous,
    lineItemCount: s.ocCurrentOrder.order ? s.ocCurrentOrder.order.LineItemCount : 0,
  }))

  return (
    <>
      <Head>
        <title>Hztl Merch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {/* <h1 className="text-red-200">React Headstart</h1>
          <p>{`Cart Count ${lineItemCount}`}</p> */}
        <nav className="flex justify-end min-h-[80px]">
          <div className="flex w-full justify-between py-3 shadow-md fixed pb-4 mb-4 z-20 bg-black font-bold font-morderEra items-center px-8 text-white">
            <div className="px-4 py-1  transition duration-300 ">
              {' '}
              <img src="white-png-logo.png" className="w-[100px]" />
            </div>
            <ul className={'flex'}>
              <li className="px-4 py-1  hover:border-[#7fc3ba] transition duration-300 border-b-2 border-black">
                <Link href="/">Home</Link>
              </li>
              <li className="px-4 py-1 hover:border-b-2 hover:border-[#7fc3ba] transition duration-300 border-b-2border-black">
                <Link href="/cart">
                  <p>Cart {lineItemCount}</p>
                </Link>
              </li>
              <li className="px-4 py-1 hover:border-b-2 hover:border-[#7fc3ba] transition duration-300 border-b-2border-black">
                <Link href="/products">Products</Link>
              </li>

              {isAnonymous ? (
                <>
                  <li className="px-4 py-1 hover:border-b-2 hover:border-[#7fc3ba] transition duration-300 border-b-2border-black">
                    <Link href="/registration">Registration</Link>
                  </li>
                  <li className="px-4 py-1 hover:border-b-2 hover:border-[#7fc3ba] transition duration-300 border-b-2border-black">
                    <Link href="/login">Login</Link>
                  </li>
                </>
              ) : (
                <li className="px-4 py-1 hover:border-b-2 hover:border-[#7fc3ba] transition duration-300 border-b-2border-black">
                  <button disabled={loading} onClick={() => dispatch(logout())}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
            {/* {!isAnonymous && user && <p>{`${user.FirstName} ${user.LastName}`}</p>} */}
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
