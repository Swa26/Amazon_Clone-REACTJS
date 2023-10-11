import React from 'react'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottom'

function FooterMain() {
  return (
    <div className='text-titleFont'>
        <FooterTop/>
        <FooterMiddle/>
        <FooterBottom/>
    </div>
  )
}

export default FooterMain