import React from 'react'
import { footerBottomItem } from '../../constants'

function FooterBottom() {
    return (
        <div className='w-full bg-black p-8 text-WhiteText'>
            <div className='max-w-5xl mx-auto '>
                <div className='w-full grid grid-cols-3 md:grid-cols-4 mdl:grid-cols-5 lgl:grid-cols-6 gap-3 place-content-center text-gray-400'>
                    {
                        footerBottomItem.map((item) => (
                            <div className='group cursor-pointer' key={item.id}>
                                <h3 className='footerBottomTitle'>{item.title}</h3>
                                <p className='footerBottomText'>{item.des}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FooterBottom