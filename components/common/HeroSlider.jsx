import React, { useEffect, useRef } from 'react'
import TgApprovedLogo from '../Shared/TgApprovedLogo';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ArrowBorderButton from '../Shared/ArrowBorderButton'

export default function HeroSlider({ handleArrow }) {
    const ref = useRef(null);

    useEffect(() => {
        handleArrow(ref.current.splide);
    }, [handleArrow])
    return (
        <div className='absolute right-0 top-16 md:top-0 w-[calc(100%_-_25vw)] md:w-[calc(100%_-_22vw)] lg:w-[calc(100%_-_19vw)] xl:w-[calc(100%_-_15vw)] 2xl:w-[calc(100%_-_18vw)] 3xl:w-[calc(100%_-_14vw)]'>
            <div className='grid grid-cols-[1fr_50px] lg:grid-cols-[1fr_100px] gap-4'>
                <div className='relative rounded overflow-hidden '>
                    <Splide ref={ref} options={{
                        type: "loop",
                        perPage: 3,
                        autoplay: true,
                        arrows: false,
                        gap: '1rem',
                        pagination: false,
                        focus: 'center',
                        breakpoints: {
                            1536:{
                                perPage: 3
                            },
                            1280: {
                                perPage: 2.5
                            },
                            1024: {
                                perPage: 2
                            },
                            768: {
                                perPage: 1.5,
                            },
                            640: {
                                perPage: 1
                            }
                        },
                    }}>
                        <SplideSlide>
                            <div className='relative rounded-md overflow-hidden border border-[#CCC] xl:border-none'>
                                <img src="/homepage/hotel1.jpg" alt="" className=' object-cover w-full h-full xl:shadow-xl ' />
                                <div className='purple-linear absolute bottom-0 p-3 flex w-full justify-between items-center'>
                                    <p className='text-white text-xs md:text-sm'>Gay Group Trip: Dubai To Korea</p>
                                    <TgApprovedLogo className={'w-6 h-5'} />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='relative rounded-md overflow-hidden border border-[#CCC] xl:border-none'>
                                <img src="/homepage/hotel2.jpg" alt="" className=' object-cover w-full h-full xl:shadow-xl' />
                                <div className='purple-linear absolute bottom-0 p-3 flex w-full justify-between items-center'>
                                    <p className='text-white text-xs md:text-sm'>Gay Group Trip: Dubai To Korea</p>
                                    <TgApprovedLogo className={'w-6 h-5'} />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='relative rounded-md overflow-hidden border border-[#CCC] xl:border-none'>
                                <img src="/homepage/hotel3.jpg" alt="" className=' object-cover w-full h-full xl:shadow-xl' />
                                <div className='purple-linear absolute bottom-0 p-3 flex w-full justify-between items-center'>
                                    <p className='text-white text-xs md:text-sm'>Gay Group Trip: Dubai To Korea</p>
                                    <TgApprovedLogo className={'w-6 h-5'} />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='relative rounded-md overflow-hidden border border-[#CCC] xl:border-none'>
                                <img src="/homepage/hotel1.jpg" alt="" className=' object-cover w-full h-full xl:shadow-xl' />
                                <div className='purple-linear absolute bottom-0 p-3 flex w-full justify-between items-center'>
                                    <p className='text-white text-xs md:text-sm'>Gay Group Trip: Dubai To Korea</p>
                                    <TgApprovedLogo className={'w-6 h-5'} />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='relative rounded-md overflow-hidden border border-[#CCC] xl:border-none'>
                                <img src="/homepage/hotel3.jpg" alt="" className=' object-cover w-full h-full xl:shadow-xl' />
                                <div className='purple-linear absolute bottom-0 p-3 flex w-full justify-between items-center'>
                                    <p className='text-white text-xs md:text-sm'>Gay Group Trip: Dubai To Korea</p>
                                    <TgApprovedLogo className={'w-6 h-5'} />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='relative rounded-md overflow-hidden border border-[#CCC] xl:border-none'>
                                <img src="/homepage/hotel2.jpg" alt="" className=' object-cover w-full h-full xl:shadow-xl' />
                                <div className='purple-linear absolute bottom-0 p-3 flex w-full justify-between items-center'>
                                    <p className='text-white text-xs md:text-sm'>Gay Group Trip: Dubai To Korea</p>
                                    <TgApprovedLogo className={'w-6 h-5'} />
                                </div>
                            </div>
                        </SplideSlide>

                    </Splide>
                </div>
                <div className='rotate-180 h-full'>
                    <button className='flex flex-col items-center bg-[#743D7D] px-3 py-5 rounded-r h-full lg:w-full justify-center shadow-lg'>
                        <ArrowBorderButton className={'w-6 h-6 mb-4'} /> <h3 className='text-sm text-white font-semibold vertical-lr lg:text-base 2xl:text-xl 3xl:text-2xl'>View All</h3>
                    </button>
                </div>
            </div>
        </div>
    )
}
