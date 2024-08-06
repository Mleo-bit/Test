import React from 'react'

const Logos = () => {
  return (
    <div className='logos flex flex-col py-24 items-center'>
        <h4 className='mb-12 text-xs font-semibold text-slate-400'>TRUSTED BY THE MOST IMPORTANT BRANDS IN THE BLOCKCHAIN COMMUNITY</h4>
        <div className='container flex px-4 items-center md:px-24 w-full'>
            
            <div className='logos-list flex flex-col items-start md:flex-row md:flex-wrap md:justify-center'>
                <img src="https://alphawallet.com/wp-content/uploads/2020/07/ethereum@2x.png" alt="" className='w-40 h-9'/>
                <img src="https://alphawallet.com/wp-content/uploads/2020/07/coinbase@2x.png" alt="" className='w-40 h-9'/>
                <img src="https://alphawallet.com/wp-content/uploads/2020/07/bartercard@2x.png" alt="" className='w-40 h-9'/>
                <img src="https://alphawallet.com/wp-content/uploads/2020/07/celo@2x.png" alt=""className='w-40 h-9'/>
                <img src="https://alphawallet.com/wp-content/uploads/2020/07/maker@2x.png" alt="" className='w-40 h-9'/>
                <img src="https://alphawallet.com/wp-content/uploads/2020/07/fenbushi@2x.png" alt="" className='w-40 h-9'/>
                <img src="https://alphawallet.com/wp-content/uploads/2020/07/circle@2x.png" alt="" className='w-40 h-9'/>
                <img src="https://alphawallet.com/wp-content/uploads/2020/07/compound@2x.png" alt="" className='w-40 h-9'/>
            </div>
        </div>
    </div>
  )
}

export default Logos