import React, { useEffect, useRef } from 'react'
import TgApprovedLogo from '../Shared/TgApprovedLogo';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ArrowBorderButton from '../Shared/ArrowBorderButton'

export default function HeroSlider({ handleArrow }) {
    const ref = useRef(null);

    useEffect(() => {
        handleArrow(ref.current.splide);
    },[handleArrow])
    return (
        <div className='absolute right-0 -bottom-16 md:-bottom-20 lg:-bottom-12 2xl:-bottom-[5vw] w-[calc(100%_-_30vw)] md:w-[calc(100%_-_22vw)] lg:w-[calc(100%_-_18vw)] xl:w-[calc(100%_-_14vw)]'>
            <div className='grid grid-custom-column gap-4'>
                <div className='relative rounded overflow-hidden'>
                    <Splide ref={ref} options={{
                        type: "loop",
                        perPage: 3,
                        autoplay: true,
                        arrows: false,
                        gap: '1rem',
                        pagination: false,
                        focus: 'center',
                        breakpoints: {
                            1024: {
                                perPage: 2
                            },
                            640: {
                                perPage: 1
                            }
                        },
                    }}>
                        <SplideSlide>
                            <div className='relative'>
                                <img src="/homepage/hotel1.jpg" alt="" className='object-cover w-full h-full ' />
                                <div className='purple-linear absolute bottom-0 p-3 flex w-full justify-between items-center'>
                                    <p className='text-white text-xs md:text-sm'>Gay Group Trip: Dubai To Korea</p>
                                    <TgApprovedLogo className={'w-6 h-5'} />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='relative'>
                                <img src="/homepage/hotel2.jpg" alt="" className='object-cover w-full h-full' />
                                <div className='purple-linear absolute bottom-0 p-3 flex w-full justify-between items-center'>
                                    <p className='text-white text-xs md:text-sm'>Gay Group Trip: Dubai To Korea</p>
                                    <TgApprovedLogo className={'w-6 h-5'} />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='relative'>
                                <img src="/homepage/hotel3.jpg" alt="" className='object-cover w-full h-full' />
                                <div className='purple-linear absolute bottom-0 p-3 flex w-full justify-between items-center'>
                                    <p className='text-white text-xs md:text-sm'>Gay Group Trip: Dubai To Korea</p>
                                    <TgApprovedLogo className={'w-6 h-5'} />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='relative'>
                                <img src="/homepage/hotel1.jpg" alt="" className='object-cover w-full h-full' />
                                <div className='purple-linear absolute bottom-0 p-3 flex w-full justify-between items-center'>
                                    <p className='text-white text-xs md:text-sm'>Gay Group Trip: Dubai To Korea</p>
                                    <TgApprovedLogo className={'w-6 h-5'} />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='relative'>
                                <img src="/homepage/hotel3.jpg" alt="" className='object-cover w-full h-full' />
                                <div className='purple-linear absolute bottom-0 p-3 flex w-full justify-between items-center'>
                                    <p className='text-white text-xs md:text-sm'>Gay Group Trip: Dubai To Korea</p>
                                    <TgApprovedLogo className={'w-6 h-5'} />
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='relative'>
                                <img src="/homepage/hotel2.jpg" alt="" className='object-cover w-full h-full' />
                                <div className='purple-linear absolute bottom-0 p-3 flex w-full justify-between items-center'>
                                    <p className='text-white text-xs md:text-sm'>Gay Group Trip: Dubai To Korea</p>
                                    <TgApprovedLogo className={'w-6 h-5'} />
                                </div>
                            </div>
                        </SplideSlide>

                    </Splide>
                </div>
                <div className='rotate-180 h-full'>
                    <button className='flex flex-col items-center bg-[#743D7D] px-3 py-5 rounded-r h-full justify-center'>
                        <ArrowBorderButton className={'w-6 h-6 mb-4'} /> <h3 className='text-sm text-white font-bold vertical-lr'>View All</h3>
                    </button>
                </div>
            </div>
        </div>
    )
}
