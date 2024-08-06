import React from 'react'

const HomePage = () => {
  return (
    <div className="bg-bg-color flex flex-col md:flex-row-reverse lg:pl-20 lg:pr-20">
      <div className='sm:max-w-full flex justify-center mt-11'> 
        <img src="https://alphawallet.com/wp-content/uploads/2020/07/open-source-wallet.png" alt="wp-content" className=''/>
      </div>
      <div className='flex flex-col justify-center gap-8 h-copy-lg'>
        <h1 className='text-3xl font-bold lg:text-5xl max-h-56'>
          The ultimate Web3 Wallet to power your tokens.
        </h1>
        <h4 className='text-lg max-w-2xl max-h-40'>
          AlphaWallet is the only self-custodial wallet,
          that’s 100% open source. Production Ready,
          simply customize for your tokens and launch your MVP in 1/5 of the time.
          Built by web3 engineers, for the community.
        </h4>
        <div className='flex justify-center gap-6 mt-9'>
          <button className='btn-download'><img src="https://alphawallet.com/wp-content/themes/alphawallet/img/google-play.svg" alt="get-on-ggpl" /></button>
          <button className='btn-download'><img src="https://alphawallet.com/wp-content/themes/alphawallet/img/app-store.svg" alt="get-on-appst" /></button>
          <button className='btn-download'><img src="https://alphawallet.com/wp-content/themes/alphawallet/img/apk.svg" alt="get-on-android" /></button>
        </div>
      </div>
    </div>
  )
}



export default HomePage
