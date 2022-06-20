import React, { useEffect, useRef } from 'react'
import TgApprovedRedLogo from "../Shared/TgApproveRedLogo"
import HotelBookingForm from '../common/HotelBookingForm'
export default function HotelBooking() {
    const ref = useRef(null)
    // function closeOnOutsideClick(){
    //     if()
    // }
    useEffect(() => {
        window.addEventListener('click', function(e){
            if(ref.current.contains(e.target)){
                return ;
            } else{ 
                ref.current.classList.add('h-0')
                ref.current.classList.remove('py-6')
                setTimeout(() => {
                    ref.current.parentNode.classList.add('hidden') 
                }, 150);
            }
        })
    })
    return (
        <section className='bg-black/[0.8] fixed inset-0 z-[100] pointer-events-none xl:hidden'>
            <div className='bg-primary px-3 py-6 fixed bottom-0 left-0 right-0 rounded-t-xl pointer-events-auto transition-all' ref={ref}>
                <div className='flex flex-col items-center'>
                    <hr className='h-1 rounded bg-[#D74874] mb-6 w-[116px]' />
                    <TgApprovedRedLogo />
                    <h3 className='text-primary text-center font-bold text-lg mt-1'>Book A Travel Gay Approved Hotel</h3>
                </div>
                <div className='mt-4'>
                    <HotelBookingForm />
                </div>
            </div>
        </section>
    )
}
