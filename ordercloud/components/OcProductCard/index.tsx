import { BuyerProduct } from 'ordercloud-javascript-sdk'
import { FunctionComponent, useState } from 'react'

interface OcProductCardProps {
  product: BuyerProduct
}

const OcProductCard: FunctionComponent<OcProductCardProps> = ({ product }) => {
  const [currentColor, setCurrentColor] = useState('#000')
  const [currentPic, setCurrentPic] = useState(product.xp.Images[0])

  const handleColorChange = (color, pic) => {
    setCurrentColor(color)
    setCurrentPic(pic)
  }

  const colors = ['#000', '#D5212E', '#F18557']
  return (
    // <div className="w-z2 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    //   <a href={`/products/${product.ID}`}>
    //     <img
    //       src={product.xp.Images[0]}
    //       alt="Product"
    //       className="h-80 w-72 object-cover rounded-t-xl"
    //     />
    //     <div className="px-4 py-3 w-72">
    //       <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
    //       <p className="text-lg font-bold text-black truncate block capitalize">{product.Name}</p>
    //       <div className="flex items-center">
    //         <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
    //         <del>
    //           <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
    //         </del>
    //         <div className="ml-auto">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="20"
    //             height="20"
    //             fill="currentColor"
    //             className="bi bi-bag-plus"
    //             viewBox="0 0 16 16"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
    //             />
    //             <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
    //           </svg>
    //         </div>
    //       </div>
    //     </div>
    //   </a>
    // </div>
    <div className={`flex justify-center items-center min-h-screen bg-[${currentColor}]`}>
      <div className="container flex flex-wrap justify-between w-5/6 h-3/4 bg-white m-5 py-4">
        <div
          className={`imgBx relative flex justify-center items-center w-1/2 h-full  transition duration-3001`}
        >
          <span className="absolute top-0 left-4 text-black opacity-20 text-5xl font-bold z-1">
            <span className="after:w-10 after:h-3 after:absolute after:top-1/4 after:left-[100px] after:bg-white opacity-">
              Hztl
            </span>
            <br /> Merch
          </span>
          <img
            src={currentPic}
            alt="Nike Jordan Proto-Lyte Image"
            className="relative w-4/5 transform -rotate-30 transition duration-900"
          />
        </div>
        <div className="details flex justify-center items-center w-1/2 h-full box-border p-10">
          <div className="content">
            <h2 className="text-3xl font-semibold leading-tight" style={{ color: currentColor }}>
              {product.Name} <br />
              <span className="text-xs uppercase text-gray-600">Running Collection</span>
            </h2>
            <p className="max-w-85 ml-15 text-base text-gray-700 mb-8">{product.Description}</p>
            <p>Available Colors</p>
            <div className="product-colors flex my-4">
              {product?.xp?.Images?.map((im, index) => {
                return (
                  <span
                    className={`bg-[${colors[index]}] mx-2  block ${
                      currentColor === colors[index] && 'active'
                    } w-6 h-6 rounded-full`}
                    onClick={() => handleColorChange(colors[index], im)}
                  ></span>
                )
              })}
            </div>
            <h3 className="text-3xl text-gray-600 mb-4" style={{ color: currentColor }}>
              $ {product.xp.Price}
            </h3>
            <a
              href={`/products/${product.ID}?color=${currentColor}`}
              className="bg-black text-white border-none outline-none px-8 py-3 mt-1 text-base uppercase font-semibold rounded-full float-right"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <footer className="fixed right-4 bottom-4">
        <a
          href="https://hztl-merch.vercel.app/"
          target="_blank"
          className="text-white text-xs no-underline"
        >
          https://hztl-merch.vercel.app/
        </a>
      </footer>
    </div>
  )
}

export default OcProductCard
