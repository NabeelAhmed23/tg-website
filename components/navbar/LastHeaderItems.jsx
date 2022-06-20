import React, { Component } from 'react'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { AiOutlineUser } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import LastItemButton from './lastitems/LastItemButton'

export default class LastHeaderItems extends Component {
    render() {
        const items = [
            { label: 'usd', icon: <IconContext.Provider value={{className: "fill-[#D74874] text-primary"}}><FaRegMoneyBillAlt /></IconContext.Provider>, className: "block uppercase" },
            { label: 'eng', icon: <IconContext.Provider value={{className: "text-primary"}}><TbWorld /></IconContext.Provider> , className: "block uppercase"},
            { label: 'my account', icon: <IconContext.Provider value={{className: "fill-[#D74874] text-primary"}}><AiOutlineUser /></IconContext.Provider>, className: "hidden xl:block capitalize" }
        ]
        return (
            <div className='flex items-center'>
               {items.map((item, index) => (<LastItemButton key={index} label={item.label} icon={item.icon} className={item.className}/>))}
            </div>
        )
    }
}
