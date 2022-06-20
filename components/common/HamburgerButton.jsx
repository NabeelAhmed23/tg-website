import React from 'react'
import Hamburger from '../Shared/Hamburger'
import PropTypes from 'prop-types'

export default function HamburgerButton({ handleHamburgerMenu, className }) {
    return (
        <button onClick={() => handleHamburgerMenu()} className={className}>
            <Hamburger className='w-4 xs:w-5' />
        </button>
    )
}

HamburgerButton.propTypes = {
    handleHamburgerMenu: PropTypes.func.isRequired,
    className: PropTypes.string
}