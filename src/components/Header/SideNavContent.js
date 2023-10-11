import React from 'react'
import { Menu,Close, AccountCircle,KeyboardArrowRight } from '@mui/icons-material'

const SideNavContent = (props) => {
    return (
        <div className='py-3 border-b-[1px] border-b-gray-300'>
            <h3 className='font-semibold text-lg font-titleFont mb-1 px-6'>{props.title}</h3>
            <ul className='text-sm'>
                <li className='flex justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>
                   {props.one}<span><KeyboardArrowRight /></span>
                </li>
            </ul>
            <ul>
                <li className='flex justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>
                   {props.two}<span><KeyboardArrowRight /></span>
                </li>
            </ul>
            <ul>
                <li className='flex justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>
                    {props.three} <span><KeyboardArrowRight /></span>
                </li>
            </ul>
        </div>
    )
}

export default SideNavContent