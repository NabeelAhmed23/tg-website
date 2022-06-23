import React, { Component } from 'react'
import HotelBookingForm from '../common/HotelBookingForm'
import TgApproveRedLogo from '../Shared/TgApproveRedLogo'

export default class HotelBookingDesktop extends Component {
    render() {
        const formID = 'hotelBookingForm';
        return (
            <section className='mt-36 2xl:mt-42 3xl:mt-56 theme-x-padding hidden xl:block '>
                <div className='bg-primary p-6 2xl:p-6 2xl:px-10 grid grid-cols-[180px_1fr_100px] 2xl:grid-cols-[300px_1fr_100px] gap-4 rounded shadow-lg items-center'>
                    <div>
                        <h3 className='text-primary font-semibold text-xl mt-1 2xl:text-3xl 2xl:leading-10'>Book A Travel Gay Approved Hotel</h3>
                    </div>
                    <HotelBookingForm formID={formID} />
                    <div className='flex flex-col items-center justify-between h-full'>
                        <TgApproveRedLogo className={'w-12 3xl:w-16 '} />
                        <button form={formID} type='submit' className='px-5 py-3 rounded bg-[#743D7D] text-white text-sm' >Search</button>
                    </div>
                </div>
            </section>
        )
    }
}
