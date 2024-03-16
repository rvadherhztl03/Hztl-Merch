import Head from 'next/head'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import logout from '../ordercloud/redux/ocAuth/logout'
import { useOcDispatch, useOcSelector } from '../ordercloud/redux/ocStore'
import { Button } from '../@/components/ui/button'

const Layout: FunctionComponent = ({ children }) => {
  const dispatch = useOcDispatch()

  const { user, isAnonymous, loading, lineItemCount } = useOcSelector((s) => ({
    user: s.ocUser.user,
    loading: s.ocAuth.loading,
    isAnonymous: s.ocAuth.isAnonymous,
    lineItemCount: s.ocCurrentOrder.order ? s.ocCurrentOrder.order.LineItemCount : 0,
  }))

  return (
    <>
      <Head>
        <title>React Headstart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {/* <h1 className="text-red-200">React Headstart</h1>
          <p>{`Cart Count ${lineItemCount}`}</p> */}
        <nav className="flex justify-end min-h-[80px]">
          <ul className="flex w-full justify-end py-3 shadow-md fixed pb-4 mb-4 ">
            <li className="px-4 py-1 hover:border-b-2 hover:border-[#7fc3ba] transition duration-300 border-b-2 border-white">
              <Link href="/">Home</Link>
            </li>
            <li className="px-4 py-1 hover:border-b-2 hover:border-[#7fc3ba] transition duration-300 border-b-2 border-white">
              <Link href="/cart">
                <p>Cart {lineItemCount}</p>
              </Link>
            </li>
            <li className="px-4 py-1 hover:border-b-2 hover:border-[#7fc3ba] transition duration-300 border-b-2 border-white">
              <Link href="/products">Products</Link>
            </li>

            {isAnonymous ? (
              <>
                <li className="px-4 py-1 hover:border-b-2 hover:border-[#7fc3ba] transition duration-300 border-b-2 border-white">
                  <Link href="/registration">Registration</Link>
                </li>
                <li className="px-4 py-1 hover:border-b-2 hover:border-[#7fc3ba] transition duration-300 border-b-2 border-white">
                  <Link href="/login">Login</Link>
                </li>
              </>
            ) : (
              <li className="px-4 py-1 hover:border-b-2 hover:border-[#7fc3ba] transition duration-300 border-b-2 border-white">
                <button disabled={loading} onClick={() => dispatch(logout())}>
                  Logout
                </button>
              </li>
            )}
            {/* {!isAnonymous && user && <p>{`${user.FirstName} ${user.LastName}`}</p>} */}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
