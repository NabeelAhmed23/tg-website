import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Grid } from '@splidejs/splide-extension-grid'

export default function GroupTripsComponent() {
    return (
        <div>
            <h1 className='font-bold text-primary text-lg'>Gay Group Trips</h1>
            <div className='mt-2'>
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
                    className: "pr-4",
                    breakpoints: {
                        1280: {
                            grid: {
                                rows: 2,
                                cols: 1,
                                gap: {
                                    row: "1rem"
                                }
                            }
                        },
                        1024: {
                            grid: false,
                            perPage: 2,
                            type: 'loop',
                            padding: { right: "1rem" }
                        },

                        640: {
                            perPage: 1,
                            type: 'loop',
                            padding: { right: "2rem" }
                        }
                    },
                }}>
                    <SplideSlide>
                        <div className='relative'>
                            <img src="/homepage/trip1.jpg" alt="" className='w-full' />
                            <button className='bg-white px-4 py-3 rounded text-sm absolute bottom-3 left-3 font-bold xl:text-xs'>Sydeny To Berline</button>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='relative'>
                            <img src="/homepage/trip2.jpg" alt="" className='w-full' />
                            <button className='bg-white px-4 py-3 rounded text-sm absolute bottom-3 left-3 font-bold xl:text-xs'>Sydeny To Dubai</button>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='relative'>
                            <img src="/homepage/trip3.jpg" alt="" className='w-full' />
                            <button className='bg-white px-4 py-3 rounded text-sm absolute bottom-3 left-3 font-bold xl:text-xs'>Sydeny To Tokyo</button>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='relative'>
                            <img src="/homepage/trip4.jpg" alt="" className='w-full' />
                            <button className='bg-white px-4 py-3 rounded text-sm absolute bottom-3 left-3 font-bold xl:text-xs'>Sydeny To Australia</button>
                        </div>
                    </SplideSlide>

                </Splide>
            </div>
        </div>
    )
}

