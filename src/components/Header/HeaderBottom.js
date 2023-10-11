import React, { useEffect, useRef, useState } from 'react'
import { Menu, Close, AccountCircle, KeyboardArrowRight } from '@mui/icons-material'
import SideNavContent from './SideNavContent';
import {motion} from 'framer-motion';
const HeaderBottom = () => {
    const ref=useRef();
    const [sidebar, setSideBar] = useState(false);
    useEffect(()=>{
        document.body.addEventListener("click" , (e)=>{
            if(e.target.contains(ref.current)){
                setSideBar(false);
            }
        })
    },[ref,sidebar])
    return (
        <div className='w-full px-4 bg-amazon_light h-[2.5rem] text-white flex items-center'>

            {/*=========== ListItem Start =========== */}
            <ul className='flex items-center gap-2 text-sm tracking-wide'>
                <li onClick={() => setSideBar(true)} className='headerhover flex items-center gap-1'>
                    <span><Menu /></span> All
                </li>
                <li className='headerhover hidden md:inline-flex'>
                    Today's Deals
                </li>
                <li className='headerhover hidden md:inline-flex'>
                    Customer Service
                </li>
                <li className='headerhover hidden md:inline-flex'>
                    Gift Cards
                </li>
                <li className='headerhover hidden md:inline-flex'>
                    Registry
                </li>
                <li className='headerhover hidden md:inline-flex'>
                    Sell
                </li>
            </ul>
            {/*=========== ListItem End =========== */}
            {/*=========== SideNav Start =========== */}
            {
                sidebar && (
                    <div className='w-full h-screen text-black fixed top-0 left-0 bg-black bg-opacity-50 z-10'>
                        <div className='w-full h-full relative'>
                            <motion.div ref={ref} initial={{x:-500 , opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5}} className=' w-[70%] md:w-[25rem] h-full bg-white border-black overflow-y-scroll'>
                                <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                                    <AccountCircle />
                                    <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello , SignIN</h3>
                                </div>
                                <SideNavContent title="Digital Content & Devices" one="Amazon Music" two="Kindle E-Readers & Books" three="Amazon Appstore" />
                                <SideNavContent title="Shop By Department" one="Electronics" two="Computers" three="Smart Home" />
                                <SideNavContent title="Programs And Features" one="Amazon Live" two="Gift Card" three="International Shopping" />
                                <SideNavContent title="Help & Setting" one="Your Account" two="Customer Service" three="Contact Us" />
                                <span onClick={()=>setSideBar(false)} className='cursor-pointer absolute top-1 left-[72%] md:left-[26rem] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300'><Close /></span>
                            </motion.div>
                        </div>
                    </div>
                )
            }
            {/*=========== SideNav End =========== */}

        </div>
    )
}

export default HeaderBottom