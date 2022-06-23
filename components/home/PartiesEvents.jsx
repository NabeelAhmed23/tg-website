import React, { Component } from 'react'
import PartyComponent from '../common/PartyComponent'
import GroupTripsComponent from '../common/GroupTripsComponent'

export class PartiesEvents extends Component {
    render() {
        return (
            <section className='bg-secondary theme-x-padding py-6 lg:py-8 xl:py-10 2xl:py-14 mt-32 2xl:mt-24 '>
                <div className='grid lg:grid-cols-2 gap-y-6 gap-x-8'>
                    <PartyComponent />
                    <GroupTripsComponent />
                </div>
            </section>
        )
    }
}

export default PartiesEvents