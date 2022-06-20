import React from 'react'
import MainNav from '../components/navbar/MainNav'
import MainFooter from '../components/footer/MainFooter'

export default function Layout({ children }) {
    return (
        <>
            <MainNav />
            <main>{children}</main>
            <MainFooter />
        </>
    )
}
