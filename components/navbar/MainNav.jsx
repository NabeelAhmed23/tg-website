import React, { Component } from 'react'
import Logo from '../Logo'
import HamburgerButton from '../common/HamburgerButton'
import LastHeaderItems from './LastHeaderItems'
import SearchBar from '../common/SearchBar'
import MainNavMenu from './navmenu/MainNavMenu'
import { HiOutlineSearch } from 'react-icons/hi'
import { IconContext } from 'react-icons'

export default class MainNav extends Component {
    state = {
        isActive: false
    }
    handleHamburgerMenu = () => {
        this.setState({ isActive: !this.state.isActive })
    }
    render() {
        return (
            <header className='pt-5 pb-8 px-3 bg-primary flex justify-between items-center sm:py-4 sticky top-0 xl:px-[3vw] xl:py-8 2xl:px-[5vw] gap-4 xl:shadow-lg z-50'>
                <div className='flex items-center'>
                    <HamburgerButton handleHamburgerMenu={this.handleHamburgerMenu} className='xl:hidden' />
                    <Logo className='w-24 inline ml-2 lg:w-28 xl:w-32' />
                </div>
                <div className='flex items-center justify-center flex-1 gap-[2%]'>
                    <SearchBar className={'absolute bg-white rounded flex items-center -bottom-4 left-1 right-1 shadow-md sm:static flex-1 mx-4 xl:max-w-sm justify-end'}>  <div className='py-1 px-4 border-l'>
                        <IconContext.Provider value={{ className: 'text-primary' }}>
                            <HiOutlineSearch />
                        </IconContext.Provider>
                    </div></SearchBar>
                    <MainNavMenu isActive={this.state.isActive} />
                </div>
                <LastHeaderItems />
            </header>
        )
    }
}
