import React, { useEffect, useRef } from 'react'
import TgApprovedRedLogo from "../Shared/TgApproveRedLogo"
import HotelBookingForm from '../common/HotelBookingForm'
import TGApprovedLogoWhite from "../Shared/TGApprovedLogoWhite"
export default function HotelBooking() {
    const ref = useRef(null)

    function closeHotelBooking(e) {
        ref.current.classList.add('h-0')
        ref.current.classList.remove('py-6')
        setTimeout(() => {
            ref.current.parentNode.classList.add('hidden')
        }, 150);
    }

    function openHotelBooking() {
        ref.current.parentNode.classList.remove('hidden')
        setTimeout(() => {
            ref.current.classList.remove('h-0')
            ref.current.classList.add('py-6')
        }, 150);
    }
    return (
        <div className='xl:hidden'>
            <div className='fixed bottom-4 right-4 z-50'>
                <button className='p-4 rounded-full bg-[#743D7D] border-2 border-white' onClick={openHotelBooking}>
                    <TGApprovedLogoWhite className={'w-8 h-8 '} />
                </button>
            </div>
            <section className=' fixed inset-0 z-[100] xl:hidden hidden'>
                <div className='fixed bg-black/[0.8] h-screen inset-0' onClick={(e) => closeHotelBooking(e)}></div>
                <div className='bg-primary px-3 py-6 bottom-0 absolute left-0 right-0 rounded-t-2xl pointer-events-auto transition-all z-[150] ' ref={ref}>
                    <div className='flex flex-col items-center'>
                        <hr className='h-1 rounded bg-[#D74874] mb-6 w-[116px]' />
                        <TgApprovedRedLogo className={'w-8 h-8'} />
                        <h3 className='text-primary text-center font-bold text-lg mt-1'>Book A Travel Gay Approved Hotel</h3>
                    </div>
                    <div className='mt-4'>
                        <HotelBookingForm />
                    </div>
                </div>
            </section>
        </div>
    )
}
