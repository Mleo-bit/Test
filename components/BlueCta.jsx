import React from 'react'

const BlueCta = () => {
  return (
    <div className='flex justify-center blue-cta h-blue-cta lg:h-96 py-20 bg-blue-600'>
      <div className='container'>
        <div className='copy flex flex-col items-center mx-36'>
        <h2 className='text-white text-2xl md:text-3xl lg:text-5xl md:font-bold font-semibold mb-6'>Have a project in mind?</h2>
        <h4 className='text-white text-sm md:text-base lg:text-xl mb-8'>We want to hear from you. Bootstrap your custom solution with our ready-to-market, white-label wallet. Or co-create with our expert team to tokenise your business model, at a fraction of the time and cost.</h4>
        <div className='flex flex-col lg:flex-row'>
          <button className='btn-contact'>Contact Us</button>
          <button className='btn-read'>Read Deck</button>
        </div>
        </div>
      </div> 
    </div>
  )
}

export default BlueCta