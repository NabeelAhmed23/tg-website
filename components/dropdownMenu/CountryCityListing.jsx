import React from 'react'

export default function CountryCityListing({ countryData }) {
    return (
        <div className='py-2'>
            <p className='text-primary font-bold text-sm'>{countryData.country}</p>
            {
                countryData.city.map((city, index) => <p key={index} className="text-sm py-1 ">{city.name}</p>)
            }
        </div>
    )
}
