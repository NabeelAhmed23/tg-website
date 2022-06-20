import React, { Component } from 'react'
import DropdownMenuItem from './DropdownMenuItem'
import DropdownContent from './DropdownContent'

export default class DropDownMenu extends Component {
    state = {
        active: 'North America'
    }
    setActive = label => {
        this.setState({ active: label })
    }
    render() {
        const continents = [
            { label: 'North America' },
            { label: 'Europe' },
            { label: 'South America' },
            { label: 'Antartica' },
            { label: 'Asia' },
            { label: 'Africa' },
            { label: 'Australia' },
        ]

        const continentData = [
            { country: "Autria", city: [{ name: 'Vienna' }] },
            { country: "Bulgaria", city: [{ name: 'Sofia' }] },
            { country: "Belgium", city: [{ name: 'Antwerp' }, { name: "Brussels" }, { name: "Bruges" }] },
            { country: "Croatia", city: [{ name: 'Zagreb' }, { name: "Dubrovnik" }] },
            { country: "Cyprus", city: [] },
            { country: "Czech Republic", city: [{ name: 'Prague' }] }, { country: "Autria", city: [{ name: 'Vienna' }] },
            { country: "Bulgaria", city: [{ name: 'Sofia' }] },
            { country: "Belgium", city: [{ name: 'Antwerp' }, { name: "Brussels" }, { name: "Bruges" }] },
            { country: "Croatia", city: [{ name: 'Zagreb' }, { name: "Dubrovnik" }] },
            { country: "Cyprus", city: [] },
            { country: "Czech Republic", city: [{ name: 'Prague' }] }, { country: "Autria", city: [{ name: 'Vienna' }] },
            { country: "Bulgaria", city: [{ name: 'Sofia' }] },
            { country: "Belgium", city: [{ name: 'Antwerp' }, { name: "Brussels" }, { name: "Bruges" }] },
            { country: "Croatia", city: [{ name: 'Zagreb' }, { name: "Dubrovnik" }] },
            { country: "Cyprus", city: [] },
            { country: "Czech Republic", city: [{ name: 'Prague' }] }, { country: "Autria", city: [{ name: 'Vienna' }] },
            { country: "Bulgaria", city: [{ name: 'Sofia' }] },
            { country: "Belgium", city: [{ name: 'Antwerp' }, { name: "Brussels" }, { name: "Bruges" }] },
            { country: "Croatia", city: [{ name: 'Zagreb' }, { name: "Dubrovnik" }] },
            { country: "Cyprus", city: [] },
            { country: "Czech Republic", city: [{ name: 'Prague' }] }, { country: "Autria", city: [{ name: 'Vienna' }] },
            { country: "Bulgaria", city: [{ name: 'Sofia' }] },
            { country: "Belgium", city: [{ name: 'Antwerp' }, { name: "Brussels" }, { name: "Bruges" }] },
            { country: "Croatia", city: [{ name: 'Zagreb' }, { name: "Dubrovnik" }] },
            { country: "Cyprus", city: [] },
            { country: "Czech Republic", city: [{ name: 'Prague' }] },
        ]
        console.log(continentData.length)
        const { active } = this.state
        return (
            <div className='xl:absolute top-14 xl:-left-[12rem] 2xl:-left-8 xl:h-[34rem] xl:w-[60rem]'>
                <div className='h-full xl:flex'>
                    <ul className='xl:py-4 bg-primary w-full xl:w-52 h-full py-2'>
                        {
                            continents.map((continent, index) => <DropdownMenuItem active={active} key={index} setActive={this.setActive} label={continent.label} continentData={continentData} />)
                        }
                    </ul>
                    {this.state.active && <DropdownContent continentData={continentData} className={' hidden xl:grid xl:grid-cols-4'} />}
                </div>
            </div>
        )
    }
}
