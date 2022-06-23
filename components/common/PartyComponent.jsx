import React, { Component } from 'react'
import { SplideSlide, Splide } from '@splidejs/react-splide'
import Link from 'next/link'

export default class PartyComponent extends Component {
    render() {
        return (
            <div>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold text-primary text-xl xl:text-[28px]'>Parties & Events</h1>
                    <Link href="#"><a className='text-[#666666] underline'> View All </a></Link>
                </div>
                <div className='mt-2 xl:mt-8'>
                    <Splide options={{
                        autoplay: false,
                        perPage: 2,
                        arrows: false,
                        gap: '1rem',
                        pagination: false,
                        focus: 'center',
                        breakpoints: {
                            1280: {
                                perPage: 1,
                                padding: { right: "2rem" }
                            },
                            1023: {
                                perPage: 2,
                                padding: "auto"
                            },

                            640: {
                                perPage: 1,
                                type: "loop",
                                padding: { right: "2rem" }
                            }
                        },
                    }}>
                        <SplideSlide>
                            <div className='relative hover:drop-shadow-2xl'>
                                <img src="/homepage/party1.jpg" alt="" className='rounded-md w-full' />
                                <div className='absolute bottom-0 p-3 purple-overlay w-full rounded-b-md h-2/5 flex flex-col justify-end'>
                                    <p className='font-semibold text-white xl:text-sm '>Firebird Tell Us Love Story. Story of Bar See More About Next...</p>
                                    <div className='flex justify-between items-center mt-5'>
                                        <button className="rounded px-3 py-2 2xl:px-4 2xl:py-3 font-semibold xl:text-sm bg-white shadow-md">View Details</button>
                                        <p className='text-xs text-white'>Friday, May 27</p>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='relative hover:drop-shadow-2xl'>
                                <img src="/homepage/party2.jpg" alt="" className='rounded-md w-full' />
                                <div className='absolute bottom-0 p-3 purple-overlay w-full rounded-b-md h-2/5 flex flex-col justify-end'>
                                    <p className='font-semibold text-white xl:text-sm'>Firebird Tell Us Love Story. Story of Bar See More About Next...</p>
                                    <div className='flex justify-between items-center mt-5'>
                                        <button className="rounded px-3 py-2 2xl:px-4 2xl:py-3 font-semibold xl:text-sm bg-white shadow-md">View Details</button>
                                        <p className='text-xs text-white'>Friday, May 27</p>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>


                    </Splide>
                </div>
            </div>
        )
    }
}
