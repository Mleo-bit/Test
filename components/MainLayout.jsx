import React from 'react'
import MainHeader from './MainHeader'
import Logos from './Logos'
import Features from './Features'
import BlueCta from './BlueCta'
import CaseStudy from './CaseStudy'
import Lastest from './Lastest'
import Footer from './Footer'

const MainLayout = ({ children }) => {


  return (
    <div className='bg-bg-color-2'>
      <div className='mainheader'>
        <MainHeader />
      </div>

      <hr />
      <main>{children}</main>

      <div className='logos'>
        <Logos/>
      </div>

      <hr />

      <div className='features'>
        <Features/>
      </div>

      <div className='blue-cta'>
        <BlueCta/>
      </div>

      <div className='case-study'>
        <CaseStudy/>
      </div>

      <div className='lastest-on-blog'>
        <Lastest/>
      </div>

      <hr class="border-2 border-blue-500"/>

      <div className='footer'>
        <Footer/>
      </div>

    </div>

  )
}

export default MainLayout