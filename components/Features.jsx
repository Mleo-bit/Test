'use client';

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

const Features = () => {
    const [slide, setSlide] = React.useState(true)

    const onUsersClick = () => {
      setSlide(true)
    };

    const onBusinessClick = () => {
        setSlide(false)
    };


    return (
        <div className='features-tabs pb-24'>
            <div className='container px-12 lg:px-24 max-w-full'>
                <div className='tabs pt-20 mb-8 flex justify-center'>
                    <button className={`btn-users w-36 h-16 mx-8 md:mx-12 text-xl md:text-3xl font-bold hover:text-azure-hover ${slide ?'text-azure':'text-gray-500'}`}
                    onClick={onUsersClick}>
                        For User</button>
                    <button className={`btn-users w-44 h-16 mx-8 md:mx-12 text-xl md:text-3xl font-bold hover:text-azure-hover ${!slide ?'text-azure':'text-gray-500'}`}
                    onClick={onBusinessClick}>
                        For Business</button>
                </div>
                <div className='small-hero'>
                    {slide && <EmblaCarousel/>}
                </div>
            </div>
        </div>
    )
}

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    })

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    })

    

    return (
        <div className="embla relative" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide flex flex-col md:flex-row-reverse justify-center">
                    <div className='img max-w-md-2'>
                        <img src="https://alphawallet.com/wp-content/uploads/2020/07/rich-token-experience-1.png" alt="" />
                    </div>
                    <div className='copy max-w-xl'>
                        <h5 className='flex mb-4 h-9'>
                            <img src="https://alphawallet.com/wp-content/themes/alphawallet/img/squares.svg" alt="" className='w-4 h-4 mr-3 ' />
                            <span className='flex items-center text-xs font-semibold'>FEATURES</span>
                        </h5>
                        <h2 className='text-4xl font-bold mb-5'>Rich Token Experience</h2>
                        <div>
                            <p className='mb-7'>Enjoy a native-experience with TokenScript enabled tokens. Store and manage feature rich NFT Tokens feature-rich such as game tokens and ENS, along with your ETH currencies.</p>
                        </div>
                        <div>
                            <a href="http://" className='text-sm font-semibold text-azure'>LEARN MORE</a>
                        </div>
                    </div>

                </div>
                <div className="embla__slide flex flex-col md:flex-row-reverse justify-center">
                    <div className='img max-w-md-2'>
                        <img src="https://alphawallet.com/wp-content/uploads/2020/07/best-of-class-ux-1.png" alt="" />
                    </div>
                    <div className='copy max-w-xl'>
                        <h5 className='flex mb-4 h-9'>
                            <img src="https://alphawallet.com/wp-content/themes/alphawallet/img/squares.svg" alt="" className='w-4 h-4 mr-3 ' />
                            <span className='flex items-center text-xs font-semibold'>FEATURES</span>
                        </h5>
                        <h2 className='text-4xl font-bold mb-5'>Best-Of-Class UX</h2>
                        <div>
                            <p className='mb-7'>Earn with DeFi, take part in DAOs and play games… On or off-chain. Or simply use it as an Ethereum wallet. Beginner-friendly with no hidden fees or tech background needed.</p>
                        </div>
                        <div>
                            <a href="http://" className='text-sm font-semibold text-azure'>LEARN MORE</a>
                        </div>
                    </div>

                </div>
                <div className="embla__slide flex flex-col md:flex-row-reverse justify-center">
                    <div className='img max-w-md-2'>
                        <img src="https://alphawallet.com/wp-content/uploads/2020/07/key-backup-recovery-1.png" alt="" />
                    </div>
                    <div className='copy max-w-xl'>
                        <h5 className='flex mb-4 h-9'>
                            <img src="https://alphawallet.com/wp-content/themes/alphawallet/img/squares.svg" alt="" className='w-4 h-4 mr-3 ' />
                            <span className='flex items-center text-xs font-semibold'>FEATURES</span>
                        </h5>
                        <h2 className='text-4xl font-bold mb-5'>Key Backip & Recovery</h2>
                        <div>
                            <p className='mb-7'>User-friendly 12-word secure key backup, management and recovery. Biometric and pin support. The world’s first mobile Ethereum wallet utilising Secure Enclave, giving you cold wallet level security.</p>
                        </div>
                        <div>
                            <a href="http://" className='text-sm font-semibold text-azure'>LEARN MORE</a>
                        </div>
                    </div>

                </div>

                <div className="embla__slide flex flex-col md:flex-row-reverse justify-center">
                    <div className='img max-w-md-2'>
                        <img src="https://alphawallet.com/wp-content/uploads/2020/07/advanced-web-3-browser-1.png" alt="" />
                    </div>
                    <div className='copy max-w-xl'>
                        <h5 className='flex mb-4 h-9'>
                            <img src="https://alphawallet.com/wp-content/themes/alphawallet/img/squares.svg" alt="" className='w-4 h-4 mr-3 ' />
                            <span className='flex items-center text-xs font-semibold'>FEATURES</span>
                        </h5>
                        <h2 className='text-4xl font-bold mb-5'>Advanced Web3 Browser</h2>
                        <div>
                            <p className='mb-7'>Interact and access the dApp ecosystem: DeFi, marketplaces, games and everything else. Directly from the Web3 Browser.</p>
                        </div>
                        <div>
                            <a href="http://" className='text-sm font-semibold text-azure'>LEARN MORE</a>
                        </div>
                    </div>

                </div>

                <div className="embla__slide flex flex-col md:flex-row-reverse justify-center">
                    <div className='img max-w-md-2'>
                        <img src="https://alphawallet.com/wp-content/uploads/2020/07/full-security-compilance-1.png" alt="" />
                    </div>
                    <div className='copy max-w-xl'>
                        <h5 className='flex mb-4 h-9'>
                            <img src="https://alphawallet.com/wp-content/themes/alphawallet/img/squares.svg" alt="" className='w-4 h-4 mr-3 ' />
                            <span className='flex items-center text-xs font-semibold'>FEATURES</span>
                        </h5>
                        <h2 className='text-4xl font-bold mb-5'>Full Security Compliance</h2>
                        <div>
                            <p className='mb-7'>Cutting edge, hardware-grade security. AlphaWallet uses Secure Enclave, giving you ‘cold wallet’ security compliance for all industries. Give users full confidence with phishing-proof signed SmartTokens.</p>
                        </div>
                        <div>
                            <a href="http://" className='text-sm font-semibold text-azure'>LEARN MORE</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-between'>
                <button className='slide-prev border-solid border-2 border-gray-600 rounded-full p-2 absolute top-24 xl:left-0 lg:-left-2 md:-left-4' onClick={scrollPrev}><SlArrowLeft /></button>
                <button className='slide-next border-solid border-2 border-gray-600 rounded-full p-2 absolute top-24 right-4' onClick={scrollNext}><SlArrowRight /></button>
            </div>
        </div>

        
    )
}

export default Features