import React from 'react'
import { IconContext } from "react-icons"
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi"
import DropdownContent from './DropdownContent'

export default function DropdownMenuItem({ active, label, setActive, continentData }) {

    const handleActive = () => {
        if (active === label) {
            setActive('')
        } else setActive(label)
    }

    return (
        <div className='relative'>
            <li className={active === label ? "xl:bg-white xl:shadow px-4" : "px-4"}>
                <button onClick={() => handleActive()} className='flex items-center justify-between w-full text-sm border-b border-[#EEB6C6] py-3'>
                    <span className={active === label ? "font-bold text-primary" : ""}>{label}</span>
                    <IconContext.Provider value={{ className: `text-primary hidden xl:block` }}><HiOutlineChevronRight /></IconContext.Provider>
                    <IconContext.Provider value={{ className: `text-primary xl:hidden transition ${active === label ? "rotate-180" : ""}` }}><HiOutlineChevronDown /></IconContext.Provider>
                </button>
            </li>
            {active === label && <DropdownContent className={' xl:hidden grid grid-cols-2'} continentData={continentData} />}
        </div>
    )
}
