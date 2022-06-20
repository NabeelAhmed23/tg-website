import React, { useState } from 'react'
import Link from 'next/link'
import ArrowDown from '../../Shared/ArrowDown'
import PropTypes from 'prop-types'

export default function MainNavItems({ label, link, className, active, setActive, children }) {
    function checkAndSetActive() {
        if (active === label) setActive('')
        else setActive(label)
    }

    if (!link) return (
        <React.Fragment>
            <button onClick={() => checkAndSetActive()} className={className}>
                <span className={'inline-block mr-1 w-max ' + (active === label ? 'text-primary font-bold' : "")}>{label}</span>
                <ArrowDown className={'w-2 transition ' + (active === label ? "text-primary fill-current rotate-180 xl:rotate-0" : "fill-black")} />
            </button>
            {(active === label) && children}
        </React.Fragment>
    )

    return <Link href={link}><a className={className}> {label} </a></Link>
}

MainNavItems.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    link: PropTypes.string
} 