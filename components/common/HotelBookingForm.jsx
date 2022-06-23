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
        guests: null,
        minDate: ''
    }
    componentDidMount = () => {
        const finalDate = this.getDate(new Date)
        this.setState({ checkin: finalDate, checkout: finalDate, minDate: this.getDate(new Date(finalDate), 'yyyy-mmm-dd') })
    }

    getDate = (d, format) => {
        const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
            "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const date = new Date(d)
        let finalDate
        if (format === "yyyy-mmm-dd") finalDate = `${date.getFullYear()}-${((date.getMonth() + 1) < 10) ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)}-${date.getDate() < 10 ? ('0' + (date.getDate())) : (date.getDate())}`
        else finalDate = `${date.getDate()} ${monthNames[date.getMonth()]}, ${date.getFullYear()}`
        return finalDate
    }
    handleCheckInDate = e => {
        this.setState({ checkin: this.getDate(e.target.value) }, () => {
            const min = this.getDate(new Date(this.state.checkin), 'yyyy-mmm-dd')
            this.setState({ minDate: min })
        })


    }
    handleCheckOutDate = e => {
        this.setState({ checkout: this.getDate(e.target.value) })
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
                <div className='grid grid-cols-2 xl:grid-cols-3 mt-4 gap-8'>
                    <div>

                        <HotelBookingInputs label={'Check In'} icon={<VscCalendar />} >
                            <div className='flex justify-between items-center pl-6'>
                                <p className='text-xs'>{this.state.checkin}</p>
                                <DateInput name='hotelCheckin' className='ml-6 text-sm focus:outline-none w-[18px]' id='hotelCheckin' onChange={(e) => this.handleCheckInDate(e)} />
                            </div>
                        </HotelBookingInputs>
                    </div>
                    <HotelBookingInputs label={'Check Out'} icon={<VscCalendar />} >
                        <div className='flex justify-between items-center pl-6'>
                            <p className='text-xs'>{this.state.checkout}</p>
                            <DateInput name='hotelCheckOut' className='ml-6 text-sm focus:outline-none w-[18px]' min={this.state.minDate} id='hotelCheckOut' onChange={(e) => this.handleCheckOutDate(e)} />
                        </div>
                    </HotelBookingInputs>
                    <HotelBookingInputs label={'Guests'} icon={<FiUsers />} className='col-span-2 xl:col-span-1'>
                        <SelectInput name='guestsNumber' className='ml-6 text-sm focus:outline-none  w-[calc(100%_-_1.5rem)]' id='guestsNumber' onChange={(e) => this.setState({ guests: e.target.options[e.target.selectedIndex].value })}>
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
