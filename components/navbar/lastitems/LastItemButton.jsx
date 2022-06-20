import React from 'react'
import ArrowDown from "../../Shared/ArrowDown"
import PropTypes from 'prop-types'
export default function LastItemButton({ label, icon, className }) {
    return (
        <button className='flex items-center ml-1 sm:ml-3'>
            <span>{icon}</span>
            <span className={'ml-1 text-xs ' + className}>{label}</span>
            <span><ArrowDown className='w-2 ml-1 fill-black' /></span>
        </button>
    )
}

LastItemButton.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.element.isRequired,
    className: PropTypes.string
}
