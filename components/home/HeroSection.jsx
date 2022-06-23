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
            <section className='hero-bg h-[29rem] bg-no-repeat bg-cover sm:bg-center md:h-[30rem] lg:h-[36rem] xl:h-[40rem] 2xl:h-[44rem] 3xl:h-[47.5rem] relative' >
                <div className='pt-14 md:pt-20 lg:pt-28 xl:pt-32 2xl:pt-28 3xl:pt-40 px-3 md:px-6 lg:pl-14 2xl:pl-24 w-8/12 sm:w-7/12  xl:w-6/12 blur-background h-full '>
                    <div className=' max-w-[35rem] 2xl:max-w-[40rem]'>
                        <h1 className='text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[4rem] lg:leading-tight 2xl:leading-[76px] font-bold text-shadow'>The World&apos;s Best <br /> Gay Travel Guide</h1>
                        <p className='text-xs max-w-[14rem] md:max-w-[24rem] lg:max-w-[30rem] lg:text-base leading-5 text-white text-shadow mt-2 lg:mt-4 xl:mt-5'>Find the best gay bars gay hotels
                            clubs saunas & beaches. Book a
                            hotel read reviews & get discount.</p>
                        <div className='2xl:max-w-[32rem]'>
                            <SearchBar className={'flex items-center bg-white rounded w-full mt-4 xl:mt-6 2xl:mt-8 '} >
                                <button className='bg-[#743D7D] text-white h-10 m-[1px] text-xs rounded-r font-semibold px-3 w-[7rem]'>Lets Go</button>
                            </SearchBar>
                            <div className='flex justify-between mt-4 xl:mt-6 2xl:mt-4'>
                                <p className='text-white underline text-xs lg:text-sm 2xl:text-base'>Bangkok</p>
                                <p className='text-white underline text-xs lg:text-sm 2xl:text-base'>London</p>
                                <p className='text-white underline text-xs lg:text-sm 2xl:text-base'>Barcelona</p>
                                <p className='text-white underline text-xs lg:text-sm 2xl:text-base'>Berlin</p>
                                <p className='text-white underline text-xs lg:text-sm 2xl:text-base hidden lg:block'>Miami</p>
                                <p className='text-white underline text-xs lg:text-sm 2xl:text-base hidden lg:block'>Seoul</p>
                            </div>
                        </div>
                    </div>
                    <div className='-mx-3 md:-mx-6 lg:-ml-14 2xl:-ml-24 2xl:mt-28 w-screen lg:w-screen relative'>
                        <div className='pl-3 md:pl-6 lg:pl-14 2xl:pl-20 w-max'>
                            <h2 className='text-white mt-14 2xl:mt-20 font-semibold 2xl:text-2xl'>Top Hotels</h2>
                            <p className='text-xs 2xl:text-base text-white mt-3'>Travel Gay Approved!</p>
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
                    </div>
                </div>
            </section>
        )
    }
}
