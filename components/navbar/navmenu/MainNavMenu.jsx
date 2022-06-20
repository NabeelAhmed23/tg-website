import React, { Component } from 'react'
import MainNavItems from './MainNavItems'
import DropDownMenu from '../../dropdownMenu/DropDownMenu'

export default class MainNavMenu extends Component {
    state = {
        active: ''
    }
    setActive = label => {
        this.setState({ active: label })
    }
    render() {
        const navItems = [
            { label: 'Destinations', children: <DropDownMenu /> },
            { label: 'Group Trips' },
            { label: 'Events', link: '/events' },
            { label: 'Pride', link: '/pride' },
            { label: 'Editorials', link: '/editorials' },
            { label: 'Podcast', link: '/podcast' },
            { label: "More" }
        ]
        const { isActive } = this.props
        return (
            <ul className={`bg-primary h-screen absolute left-0 right-0 bottom-0 top-[3.25rem] sm:top-[4rem] overflow-hidden xl:overflow-visible  xl:relative xl:top-0 xl:h-auto xl:flex xl:items-center xl:justify-between 2xl:mr-8 xl:max-w-lg 2xl:max-w-xl xl:min-w-[30rem] xl:w-full transition-width ${isActive ? 'w-full' : 'w-0'}`} >
                {
                    navItems.map((item, index) => (<li className={ (this.state.active === item.label) ? "bg-white shadow relative xl:bg-transparent xl:shadow-none" : "relative"} key={index}>
                        <MainNavItems label={item.label} link={item.link} className={'flex items-center justify-between w-full text-sm px-4 py-3 xl:p-0'} active={this.state.active} setActive={this.setActive}> {item.children} </MainNavItems>
                    </li>))
                }
            </ul>
        )
    }
}
