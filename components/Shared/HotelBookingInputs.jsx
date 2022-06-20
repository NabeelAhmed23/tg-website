import React from 'react'
import { IconContext } from 'react-icons'

export default function HotelBookingInputs({className, icon, label, children }) {
    return (
        <label className={'bg-white py-1 px-3 w-full inline-block rounded ' + className}>
            <div>
                <IconContext.Provider value={{ className: 'text-primary inline-block' }}>{icon}</IconContext.Provider>
                <span className='font-bold text-sm inline-block ml-2'>{label}</span>
            </div>
            {children}
        </label>
    )
}
