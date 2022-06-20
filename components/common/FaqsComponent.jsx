import React, { Component } from 'react'
import FaqSingle from '../Shared/FaqSingle'

export default class FaqsComponent extends Component {
    render() {
        const faqs = [
            { label: "Gay Travel – freedom to be yourself", answer: "Since January 2014, more than 80 million gay travelers have used Travel Gay to plan vacations, holidays, weekend breaks and great nights out. " },
            { label: "Gay Travel – freedom to be yourself", answer: "Since January 2014, more than 80 million gay travelers have used Travel Gay to plan vacations, holidays, weekend breaks and great nights out. " },
            { label: "Best for nightlife", answer: "Since January 2014, more than 80 million gay travelers have used Travel Gay to plan vacations, holidays, weekend breaks and great nights out. " },
            { label: "Best for the beach", answer: "Since January 2014, more than 80 million gay travelers have used Travel Gay to plan vacations, holidays, weekend breaks and great nights out. " },
            { label: "Gay Group Travel", answer: "Since January 2014, more than 80 million gay travelers have used Travel Gay to plan vacations, holidays, weekend breaks and great nights out. " }
        ]
        return (
            <div className='border-t border-[#d64d78] border-opacity-50 mt-4'>
                {
                    faqs.map((faq, index) => {
                        return <FaqSingle faq={faq} key={index * 30} />
                    })
                }
            </div>
        )
    }
}
