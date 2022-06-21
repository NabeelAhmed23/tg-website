import React, { Component } from 'react'
import SearchBar from '../common/SearchBar'
import ArrowBorderButton from '../Shared/ArrowBorderButton'
import HeroSlider from '../common/HeroSlider';
import '@splidejs/react-splide/css';


export default class HeroSection extends Component {
    state = {
        splide: {}
    }

    handleArrow = splide => {
        this.setState({ splide: splide })
    }

    handleSlide = dir => {
        this.state.splide.go(dir)
    }
    render() {
        return (
            <section className='hero-bg h-[28rem] bg-no-repeat bg-cover sm:bg-center md:h-[30rem] lg:h-[36rem] xl:h-[40rem] 2xl:h-[46rem] relative' >
                <div className='pt-14 md:pt-20 lg:pt-28 xl:pt-32 2xl:pt-40 px-3 md:px-6 lg:pl-14 2xl:pl-22 w-8/12 sm:w-7/12 2xl:w-6/12 blur-background h-full '>
                    <div className=' max-w-[32rem]'>
                        <h1 className='blur-none text-white text-2xl md:text-5xl lg:text-6xl font-bold text-shadow'>The World&apos;s Best <br /> Gay Travel Guide</h1>
                        <p className='text-sm max-w-[14rem] md:max-w-[24rem] lg:max-w-[30rem] lg:text-base text-white text-shadow mt-2 lg:mt-4 xl:mt-6 2xl:mt-8'>Find the best gay bars gay hotels
                            clubs saunas & beaches. Book a
                            hotel read reviews & get discount.</p>
                        <SearchBar className={'flex items-center bg-white rounded w-full mt-4 xl:mt-6 2xl:mt-8'} >
                            <button className='bg-[#743D7D] text-white h-10 text-xs rounded-r font-bold px-3 w-[6rem]'>Lets Go</button>
                        </SearchBar>
                        <div className='flex justify-between mt-4 xl:mt-6 2xl:mt-8'>
                            <p className='text-white underline text-xs lg:text-sm 2xl:text-base'>Bangkok</p>
                            <p className='text-white underline text-xs lg:text-sm 2xl:text-base'>London</p>
                            <p className='text-white underline text-xs lg:text-sm 2xl:text-base'>Barcelona</p>
                            <p className='text-white underline text-xs lg:text-sm 2xl:text-base'>Berlin</p>
                            <p className='text-white underline text-xs lg:text-sm 2xl:text-base hidden lg:block'>Miami</p>
                            <p className='text-white underline text-xs lg:text-sm 2xl:text-base hidden lg:block'>Seoul</p>
                        </div>
                    </div>
                    <h2 className='text-white mt-14 2xl:mt-20 font-bold'>Top Hotels</h2>
                    <p className='text-xs text-white'>Travel Gay Approved!</p>
                    <div className='mt-3 z-10'>
                        <button onClick={() => this.handleSlide('<')}>
                            <ArrowBorderButton className={'w-8 h-8 mr-1 '} />
                        </button>
                        <button onClick={() => this.handleSlide('>')}>
                            <ArrowBorderButton className={'w-8 h-8 rotate-180 ml-1 '} />
                        </button>
                    </div>
                </div>
                <HeroSlider handleArrow={this.handleArrow} />
            </section>
        )
    }
}
