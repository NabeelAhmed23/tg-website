import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Grid } from '@splidejs/splide-extension-grid'
import Link from 'next/link'

export default function GroupTripsComponent() {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-primary text-xl xl:text-[28px]'>Gay Group Trips</h1>
                <Link href="#"><a className='text-[#666666] underline'> View All </a></Link>
            </div>
            <div className='mt-2 overflow-hidden xl:mt-8'>
                <Splide extensions={{ Grid }} options={{
                    autoplay: false,
                    grid: {
                        rows: 2,
                        cols: 2,
                        gap: {
                            row: "1rem",
                            col: "1rem"
                        }
                    },
                    arrows: false,
                    gap: '1rem',
                    pagination: false,
                    focus: 'center',
                    className: "pr-20",
                    breakpoints: {
                        1280: {
                            grid: {
                                rows: 2,
                                cols: 1,
                            }
                        },
                        1023: {
                            type: 'loop',
                            padding: { right: "2rem" },
                            grid: {
                                cols: 2,
                                rows: 1,
                                gap: {
                                    row: "1rem"
                                }
                            }
                        },
                        640: {
                            perPage: 1,
                            type: 'loop',
                            grid: false,
                            padding: { right: "2rem" }
                        }
                    },
                }}>
                    <SplideSlide>
                        <div className='relative lg:h-[calc(100%_-_3rem)] xl:h-auto hover:drop-shadow-md'>
                            <img src="/homepage/trip1.jpg" alt="" className='w-full h-full' />
                            <button className='bg-white px-4 py-3 rounded absolute bottom-3 left-3 xl:text-sm font-semibold'>Sydeny To Berline</button>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='relative lg:h-[calc(100%_-_3rem)] xl:h-auto hover:drop-shadow-md'>
                            <img src="/homepage/trip2.jpg" alt="" className='w-full h-full' />
                            <button className='bg-white px-4 py-3 rounded absolute bottom-3 left-3 xl:text-sm font-semibold'>Sydeny To Dubai</button>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='relative lg:h-[calc(100%_-_3rem)] xl:h-auto hover:drop-shadow-md'>
                            <img src="/homepage/trip3.jpg" alt="" className='w-full h-full' />
                            <button className='bg-white px-4 py-3 rounded absolute bottom-3 left-3 xl:text-sm font-semibold'>Sydeny To Tokyo</button>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='relative lg:h-[calc(100%_-_3rem)] xl:h-auto hover:drop-shadow-md'>
                            <img src="/homepage/trip4.jpg" alt="" className='w-full h-full' />
                            <button className='bg-white px-4 py-3 rounded absolute bottom-3 left-3 xl:text-sm font-semibold'>Sydeny To Australia</button>
                        </div>
                    </SplideSlide>

                </Splide>
            </div>
        </div>
    )
}

