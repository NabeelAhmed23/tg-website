import React, { Component } from 'react'
import PartyComponent from '../common/PartyComponent'
import GroupTripsComponent from '../common/GroupTripsComponent'

export class PartiesEvents extends Component {
    render() {
        return (
            <section className='bg-primary theme-x-padding py-6 xl:py-10 mt-24 lg:py-14'>
                <div className='grid lg:grid-cols-2 gap-y-6 gap-x-8'>
                    <PartyComponent />
                    <GroupTripsComponent />
                </div>
            </section>
        )
    }
}

export default PartiesEvents