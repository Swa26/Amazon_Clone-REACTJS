import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckCircle from "@mui/icons-material/CheckCircle";
import { deleteItem, resetCart, incrementQuantity, decrementQuantity } from '../Redux/amazonSlice';
import { emptycart } from '..';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
function Cart() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.amazon.products);
  const [totalPrice, setTotalPrice] = useState(" ");
  useEffect(() => {
    let total = 0;
    product.map((item) => {
      total += item.price * item.quantity;
      return setTotalPrice(total.toFixed(2));
    }, [product])
  })
  return (
    <div className='w-full bg-gray-100 p-4 '>
      {
        product.length > 0 ? (
          <div className='w-full mx-auto h-auto grid grid-cols-5 gap-8'>
            <div className='w-full h-auto bg-white px-4 col-span-4 '>
              <div className='font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3'>
                <h2 className='text-3xl font-medium'>Shopping Cart</h2>
                <h4 className='text-xl font-normal'>Subtotal</h4>
              </div>
              {/*PRODUCTS START HERE*/}
              <div>
                {
                  product.map((item) => {
                    return <div key={item.id} className='w-full h-full border-b-[1px] border-b-gray-400 p-4 flex items-center gap-6'>
                      <div className='w-full flex items-center justify-between gap-6'>
                        <div className='w-1/5'>
                          <img className='w-full h-44 object-contain' src={item.image} alt='ProductImage'></img>
                        </div>
                        <div className='w-4/5'>
                          <h2 className='font-semibold text-lg'>{item.title}</h2>
                          <p className='pr-10 text-sm'>{item.description.substring(0, 100)}</p>
                          <p className='text-base'>Unit Price <span className='font-semibold'>${item.price}</span></p>
                          <div className=' bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md'>
                            <p>Qty:</p>
                            <p onClick={() => dispatch(decrementQuantity(item.id))} className='cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300'>-</p>
                            <p>{item.quantity}</p>
                            <p onClick={() => dispatch(incrementQuantity(item.id))} className='cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300'>+</p>
                          </div>
                          <button onClick={() => dispatch(deleteItem(item.id))} className='bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300'>
                            Delete Item
                          </button>
                        </div>
                        <div>
                          <p className='font-semibold'>${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  })
                }
              </div>
              <div className='w-full py-2'>
                <button onClick={() => dispatch(resetCart())} className='bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300'>
                  Clear Cart
                </button>
              </div>
            </div>
            {/*PRODUCTS END HERE*/}
            <div className='w-full h-52 bg-white col-span-1 flex flex-col justify-center items-center p-4'>
              <div>
                <p className='flex item-start gap-2 text-sm'><span><CheckCircle className='bg-white text-green-500 rounded-full' /></span>{" "}
                  Your Order Qualifies for FREE Shipping Choose This Option At Checkout, See Details....
                </p>
              </div>
              <div>
                <p className=' gap-2 font-semibold px-10 py-1 flex items-center justify-between'>Total: <span className='text-lg font-bold'>${totalPrice}</span></p>
              </div>

              <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">Proceed To Pay</button>
            </div>
          </div>
        ) : (
          <motion.div initial={{ y: 70, opacity: 0, }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className='flex items-center justify-center gap-4 py-10'>
            <div>
              <img className='w-80 rounded-lg p-4 mx-auto' src={emptycart} alt='empty-cart-png'></img>
            </div>
            <div className='w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg'>
              <h1 className='font-titleFont text-xl font-bold'>Your Cart Feels Lonely...</h1>
              <p className='text-sm text-center'>
                {' '}
                Your Shopping cart lives to serve. Give it purpose - fill it with books,electronics,videos etc & Make It Happy
              </p>
              <Link to='/'>
                <button className="w-full font-titleFont font-bold text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 px-2 rounded-md mt-3">Continue Shopping</button>
              </Link>
            </div>
          </motion.div>
        )
      }
    </div>
  )
}

export default Cart