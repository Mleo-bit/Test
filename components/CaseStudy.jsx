'use client';

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

const CaseStudy = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    })

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    })

    return (
        <div className="embla pt-16 pb-5 relative" ref={emblaRef}>
            <div className="embla__container flex items-center max-w- ">
                <div className="embla__slide flex flex-col md:flex-row-reverse justify-center items-center">
                    <div className='img max-w-md-2'>
                        <img src="https://alphawallet.com/wp-content/uploads/2020/07/internet-of-things-services.jpg" alt="" />
                    </div>
                    <div className='copy max-w-xl'>
                        <h5 className='flex mb-4 h-9'>
                            <img src="https://alphawallet.com/wp-content/themes/alphawallet/img/squares.svg" alt="" className='w-4 h-4 mr-3 ' />
                            <span className='flex items-center text-xs font-semibold'>FEATURES</span>
                        </h5>
                        <h2 className='text-4xl font-bold mb-5'>Car Ownership</h2>
                        <div>
                            <p className='mb-7'>Karma Cars used AlphaWallet to tokenise car ownership and enable rich-token functionality for customers to access and use their cars.</p>
                        </div>
                        <div>
                            <a href="http://" className='text-sm font-semibold text-azure'>LEARN MORE</a>
                        </div>
                    </div>
                </div>
                <div className=" embla__slide flex flex-col md:flex-row-reverse justify-center items-center">
                    <div className='img max-w-md-2'>
                        <img src="https://alphawallet.com/wp-content/uploads/2020/07/fifa-world-cup-blockchain-2.jpg" alt="" />
                    </div>
                    <div className='copy max-w-xl'>
                        <h5 className='flex mb-4 h-9'>
                            <img src="https://alphawallet.com/wp-content/themes/alphawallet/img/squares.svg" alt="" className='w-4 h-4 mr-3 ' />
                            <span className='flex items-center text-xs font-semibold'>FEATURES</span>
                        </h5>
                        <h2 className='text-4xl font-bold mb-5'>Fifa World Cup 2018</h2>
                        <div>
                            <p className='mb-7'>Shankai used AlphaWallet to tokenise 20,000 VIP tickets for the Fifa World Cup 2018 in Russia. This took down an unregulated ticket market and provided a streamlined purchase-to-event experience for ticket buyers.</p>
                        </div>
                        <div>
                            <a href="http://" className='text-sm font-semibold text-azure'>LEARN MORE</a>
                        </div>
                    </div>
                </div>
                <div className="embla__slide flex flex-col md:flex-row-reverse justify-center items-center">
                    <div className='img max-w-md-2'>
                        <img src="https://alphawallet.com/wp-content/uploads/2020/07/ecommerce-on-blockchain-1.jpg" alt="" />
                    </div>
                    <div className='copy max-w-xl'>
                        <h5 className='flex mb-4 h-9'>
                            <img src="https://alphawallet.com/wp-content/themes/alphawallet/img/squares.svg" alt="" className='w-4 h-4 mr-3 ' />
                            <span className='flex items-center text-xs font-semibold'>FEATURES</span>
                        </h5>
                        <h2 className='text-4xl font-bold mb-5'>eCommerce Marketplace</h2>
                        <div>
                            <p className='mb-7'>Bartercard adopted AlphaWallet to support the novel Qoin currency, enabling 10,000+ businesses to increase their customer base lifetime value, provide new tokenised services and find new opportunities for profitability</p>
                        </div>
                        <div>
                            <a href="http://" className='text-sm font-semibold text-azure'>LEARN MORE</a>
                        </div>
                    </div>
                </div>



            </div>

            <div className='flex justify-between'>
            <button className='slide-prev border-solid border-2 border-gray-600 rounded-full p-2 absolute left-7 top-80 xl:left-28 lg:left-14 md:left-7' onClick={scrollPrev}><SlArrowLeft /></button>
            <button className='slide-next border-solid border-2 border-gray-600 rounded-full p-2 absolute top-80 right-16 md:right-28' onClick={scrollNext}><SlArrowRight /></button>
            </div>
        </div>
    )
}

export default CaseStudy