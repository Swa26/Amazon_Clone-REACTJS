import React from 'react'

function FooterMiddleList({title,listitem}) {
    return (
        <div className='w-full'>
            <div>
                <h3 className='font-titleFont text-white text-base font-semibold mb-3'>
                    {title}
                </h3>
                <ul className='flex flex-col gap-2 font-bodyFont'>
                    {
                        listitem.map((data)=>data.Listdata.map((items , index)=>(
                            <li key={index} className='footerLink'>{items}</li>
                        )))
                    }
                </ul>
            </div>
        </div>
    )
}

export default FooterMiddleList