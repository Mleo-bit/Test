'use client';

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";


const Lastest = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  })

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  })

  return (
    <div className="embla flex flex-col-reverse pt-22 pb-18 px-22" ref={emblaRef}>
      <div className="embla__container pt-12">
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2021/06/heco-tokens-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>Heco users - we made custom token icons for you!</h3>
          <a className='text-xs text-blue-500 hover:underline' href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2021/04/How_to_improve_UX_layer_two_rollups-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>How to improve UX with layer two rollups</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/07/tokenization-gaming-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>How the Tokenization of the Gaming Industry Empowers Players</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/07/Defi-mobile-wallet-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>Why DeFi needs TokenScript</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/08/qoin-alphawallet-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>Qoin: Thriving Future of Tokenized eCommerce Marketplaces</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/08/high-gas-fee-ethereum-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>You'll never skip a beat with your gas fee in AlphaWallet</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/06/how-to-buy-ethereum-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>How to buy ETH in AlphaWallet</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/08/how-to-have-your-tokens-in-mobile-2-900x563.jpeg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>How to have your token on mobile in minutes</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/06/Tokenization-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>AlphaWallet 3.0 - Your tokens but smarter</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/06/nest_token_1-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>Leverage the power of NEST inside AlphaWallet 3.0</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/06/ibtimes-alphawallet-interview-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>IBTimes Interview with Victor Zhang</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/08/dmm-tokens-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>AlphaWallet Welcomes the Defi Money Market Foundation!</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/04/Framework_for_apps_using_blockchain-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>We need a better framework for applications using blockchain</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/08/what-is-alphawallet-explained-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>AlphaWallet CEO Explains What is AlphaWallet</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/08/Car_Ownership_Blockchain-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>A step by step guide to tokenise your car ownership using Ethereum and Internet of Things</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/08/tokenization-vouchers-restaurant-blockchain-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>How to empower small businesses with Tokenisation, the true killer app for Ethereum</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/02/alphawallet-partnership-bartercard-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>AlphaWallet Announces Partnership with Bartercard</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/08/defi-attack-explained-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>The most primitive DeFi attack vector and what you can do about it</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/08/alphawallet-app-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>Verify the authentic AlphaWallet app, from alphawallet.com</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/08/startups-blockchain-area-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>Startups in the blockchain era</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2019/11/data-on-blockchain-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>The way we treat data on the blockchain is wrong — this is how it’s supposed to work</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/08/secure-enclave-wallet-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>Secure Enclave Wallet — Your keys in good hands</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2019/08/tokenization-2-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>What is tokenization? Token-economy 101</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/08/mco-visa-card-review-900x563.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>MCO crypto-VISA gateway card is great, but its app isn’t a crypto wallet</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
        <div className="lastest__slide w-96 h-slide ">
          <img src="https://alphawallet.com/wp-content/uploads/2020/08/How-to-cross-chain-swaps-between-Ethereum-and-Bitcoin-900x600.jpg" alt="" />
          <h3 className='text-xl my-8 font-bold hover:underline lg:text-3xl'>How to: Cross chain swaps between Ethereum and Bitcoin</h3>
          <a className='text-xs text-blue-500 hover:underline'  href="">READ ARTICLE &gt;</a>
        </div>
      </div>
      <div className='flex flex-row justify-between'>
        <h3 className='text-5xl font-bold'>Latest On Blog</h3>
        <div>
        <button className='slide-prev border-solid border-2 border-gray-600 rounded-full p-2 mr-3' onClick={scrollPrev}><SlArrowLeft /></button>
        <button className='slide-next border-solid border-2 border-gray-600 rounded-full p-2 ml-3' onClick={scrollNext}><SlArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default Lastest