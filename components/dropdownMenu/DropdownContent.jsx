import React, { Component } from 'react'
import CountryCityListing from './CountryCityListing'

export default class DropdownContent extends Component {
    render() {
        const { className, continentData } = this.props
        const chunk = Math.ceil(continentData.length / (window.innerWidth < 1280 ? 2 : 4) + 1)
        const arr = continentData.map((e, i) => { return i % chunk === 0 ? continentData.slice(i, i + chunk) : null; }
        ).filter(e => { return e; });

        return (
            <div className={' bg-white p-5 w-full h-[24rem] xl:max-w-[47rem] overflow-auto xl:h-full' + className}>
                {/* {continentData.slice(0, (continentData.length / 4) - 1).map((cd, index) => <CountryCityListing key={index} countryData={cd} />)} */}
                {
                    arr.map((a, i) => {
                        return <div className='' key={i}>
                            {a.map((cd, i) => <CountryCityListing key={3 * i} countryData={cd} />)}
                        </div>
                    })
                }
            </div>
        )
    }
}
