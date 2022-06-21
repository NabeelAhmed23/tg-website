import React, { Component } from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { VscCalendar } from 'react-icons/vsc'
import { FiUsers } from 'react-icons/fi'
import TextInput from '../Shared/TextInput'
import HotelBookingInputs from '../Shared/HotelBookingInputs'
import DateInput from '../Shared/DateInput'
import SelectInput from '../Shared/SelectInput'

export default class HotelBookingForm extends Component {
    state = {
        hotelName: '',
        checkin: null,
        checkout: null,
        guests: null
    }
    handleFormSubmit = e => {
        e.preventDefault();
        console.log('Hotel Booking Form Submitted')
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleFormSubmit(e)} id={this.props.formID}>
                <HotelBookingInputs label={'Location'} icon={<MdOutlineLocationOn />} >
                    <TextInput name='hotelLocation' className='ml-6 text-sm focus:outline-none' id='hotelLocation' onChange={(e) => this.setState({ hotelName: e.target.value })} placeholder='Where are you going?' />
                </HotelBookingInputs>
                <div className='grid grid-cols-2 xl:grid-cols-3 mt-4 gap-4'>
                    <HotelBookingInputs label={'Check In'} icon={<VscCalendar />} >
                        <DateInput name='hotelCheckin' className='ml-6 text-sm focus:outline-none w-[calc(100%_-_1.5rem)]' id='hotelCheckin' onChange={(e) => this.setState({ checkin: e.target.value })} placeholder='Where are you going?' />
                    </HotelBookingInputs>
                    <HotelBookingInputs label={'Check Out'} icon={<VscCalendar />} >
                        <DateInput name='hotelCheckout' className='ml-6 text-sm focus:outline-none  w-[calc(100%_-_1.5rem)]' id='hotelCheckout' onChange={(e) => this.setState({ checkout: e.target.value })} placeholder='Where are you going?' />
                    </HotelBookingInputs>
                    <HotelBookingInputs label={'Guests'} icon={<FiUsers />} className='col-span-2 xl:col-span-1'>
                        <SelectInput name='guestsNumber' className='ml-6 text-sm focus:outline-none  w-[calc(100%_-_1.5rem)]' id='guestsNumber' onChange={(e) => this.setState({ guests: e.target.options[e.target.selectedIndex].value })} placeholder='Where are you going?' >
                            <option value='0'>0 Guests</option>
                            <option value='1'>1 Guests</option>
                            <option value='2'>2 Adults</option>
                            <option value='3'>3 Adults</option>
                            <option value='4'>4 Adults</option>
                        </SelectInput>
                    </HotelBookingInputs>

                </div>
                <div className='w-full mt-4 xl:hidden'>
                    <button className='bg-[#743D7D] py-3 text-center rounded text-white w-full '>Search</button>
                </div>
            </form>
        )
    }
}
