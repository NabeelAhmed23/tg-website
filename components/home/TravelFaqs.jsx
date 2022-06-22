import React, { Component } from 'react'
import FaqsComponent from '../common/FaqsComponent'

export default class TravelFaqs extends Component {
    render() {
        return (
            <section className='mt-[160px] lg:mt-0 lg:pl-[14vw]'>
                <div className='px-3 py-4 md:px-[14vw] bg-primary relative grid grid-cols-1 lg:grid-cols-2 lg:px-0 lg:gap-6 lg:py-10 rounded-l lg:min-h-[500px]'>
                    <div className='relative -top-40 lg:top-0 '>
                        <img src="/homepage/faq1.jpg" alt="" className='w-full md:max-w-full md:mx-auto lg:ml-0 lg:max-w-none lg:h-full lg:absolute lg:-left-[14vw] w-[calc(100%_+_14vw)] lg:object-cover lg:object-top rounded lg:rounded-r' />
                    </div>
                    <div className='-mt-36 lg:mt-0 lg:w-7/12'>
                        <h2 className='text-primary font-bold text-lg'>Gay Travel Made Easy</h2>
                        <p className='text-sm mt-2'>Since January 2014, more than 80 million gay travelers have
                            used Travel Gay to plan vacations, holidays, weekend breaks
                            and great nights out. Why?</p>
                        <div>
                            <FaqsComponent />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
