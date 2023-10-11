import React, { useState } from 'react';
//import LocationOnIcon from '@mui/material/Icon/Icon';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ArrowDropDown } from '@mui/icons-material/';
import { ShoppingCart } from '@mui/icons-material/';
import { Search } from '@mui/icons-material/';
import { logo } from '../..';
import { all } from '../../constants';
import HeaderBottom from './HeaderBottom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
  const [ShowAll, setShowall] = useState(false);
  const products=useSelector((state)=>state.amazonReducer.products);
  console.log(products);
  return (
    <div className='w-full sticky top-0 z-50'>
      <div className=' w-full bg-black text-white px-4 py-3 flex items-center gap-4'>
        {/*=========== Image Start =========== */}
        <Link to='/'>
        <div className='headerhover'>
          <img className='w-24 mt-2' src={logo} alt='Amazon Logo'></img>
        </div>
        </Link>
        {/*=========== Image End =========== */}

        {/*=========== Location Start =========== */}
        <div className='headerhover hidden mdl:inline-flex'>
          <LocationOnIcon />
          <p className='text-sm text-lightText font-light flex flex-col'>Deliver to <span className='text-sm font-semibold text-WhiteText '>Mumbai</span></p>
        </div>
        {/*=========== Location End =========== */}


        {/*=========== Search Start =========== */}
        <div className='h-10 rounded-md hidden lgl:flex flex-grow relative'>
          <span className='w-12 h-full flex items-center justify-center bg-gray-200 hover:bg-[#f3a847] duration-300 text-amazon_light cursor-pointer rounded-tl-md rounded-bl-md' onClick={() => setShowall(!ShowAll)}>All<span><ArrowDropDown /></span>

          </span>
          {
            ShowAll && (
              <div>
                <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_light text-black p-2 flex flex-col gap-1 z-50'>

                  {
                    all.map((item) => (
                      <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_light cursor-pointer duration-200' key={item.id}>{item.title}</li>
                    ))
                  }
                </ul>
              </div>
            )
          }
          <input className='h-full text-base text-amazon_light flex-grow outline-none border-none px-2' type='text'>
          </input>
          <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_light cursor-pointer rounded-tr-md rounded-br-md'><Search /></span>
        </div>
        {/*=========== Search End =========== */}

        {/*=========== SignIn Start =========== */}
        <div className=' flex flex-col items-start justify-center headerhover'>
          <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light'>Hello,SignIN</p>
          <p className='text-sm font-semibold text-WhiteText hidden mdl:inline-flex'>Accounts & Lists <span><ArrowDropDown /></span></p>
        </div>
        {/*=========== SignIn End =========== */}


        {/*=========== Orders Start =========== */}
        <div className=' hidden mdl:flex flex-col items-start justify-center headerhover'>
          <p className=' text-xs text-lightText font-light'>Returns</p>
          <p className='text-sm font-semibold text-WhiteText'>& Orders<span><ArrowDropDown /></span></p>
        </div>
        {/*=========== Orders End =========== */}



        {/*=========== Cart Start =========== */}
        <Link to='/cart'>
        <div className=' flex items-start justify-center headerhover relative'>
          <ShoppingCart />
          <p className=' text-xs text-lightText font-semibold mt-3'>Cart<span className='absolute flex justify-center items-center text-xs -top-1 p-1 h-4 left-6 font-semibold bg-amazon_yellow text-amazon_light rounded-full'>{products.length>0?products.length:0}</span></p>
        </div>
        </Link>
        {/*=========== Cart End =========== */}

      </div>
      <HeaderBottom/>
    </div>

  )
}

export default Header