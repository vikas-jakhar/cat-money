import React from 'react'
import Navbar from '../common/Navbar'
import { HERO_DATA_LIST } from '../common/Helper'
import Paragraph from '../common/Paragraph'
import Icon from '../common/Icons'
import footprint from "../../assets/images/png/footprint.png";

const Hero = () => {
    return (
        <section className='pb-0.5 relative'>
            <div className="bg-off-red px-5 py-2.5 relative z-10">
                <p className='text-white text-center font-normal !leading-3xl font-comic text-sm md:text-base'>Buy CatMoney today — Price increases on NOVEMBER 15th! [Countdown Timer Here]</p>
            </div>
            <Navbar />
            <div className="container mt-5 relative z-10">
                <p className='text-white text-center font-comic font-normal text-xl lg:text-2xl xl:text-custom-xl !leading-4xl'>Pool Ur Moneys, Catch Da Red Dot, and Win Unlimited CheeƧburgerz!</p>
                <h2 className='xl:mt-7 mt-4 text-off-pink font-luckiest font-normal tracking-[2px] !leading-2xl text-4xl sm:text-5xl lg:text-6xl md:px-4 xl:text-custom-3xl text-center xl:px-14'>Hoomin...Catch the Red Dot, Win CheeSburgerz</h2>
                <div className="lg:mt-11 flex flex-row flex-wrap lg:flex-nowrap justify-center mx-xl-0 xl:-mx-5 lg:gap-6 xl:gap-12 relative">
                    {HERO_DATA_LIST.map((items, index) => (
                        <div key={index} className="lg:max-w-[352px] sm:w-1/2 w-full px-3 lg:px-0 lg:w-full mt-8 lg:mt-0">
                            <div className="xl:h-[200px] lg:h-[177px]">
                                <img src={items.image} alt="icon" className={`${index === 0 ? "md:mr-0 mx-auto max-w-[200px]" : index === 2 ? "max-w-[402px] xl:max-w-[478px] lg:absolute right-1 top-0.5 xl:top-auto xl:right-16" : ""} w-full object-contain md:object-cover max-h-[156px] md:max-h-[193px] lg:max-h-fit`} />
                            </div>
                            <h2 className='mt-8 font-normal text-center sm:text-left font-luckiest tracking-[1px] text-xl md:text-2xl text-white !leading-3xl'>{(index === 0 || index === 2) && <span className='text-off-pink'>{items.title}</span>} {items.subTitle} {index === 1 && <span className='text-off-pink'>{items.title}</span>}</h2>
                            <Paragraph className='mt-2 text-center sm:text-left'>{items.description}</Paragraph>
                        </div>
                    ))}
                </div>
                <Icon iconName='redDotLine' className='-left-[26px] absolute xl:w-auto !hidden lg:!flex w-[16%] bottom-[39%]' />
            </div>
            <img src={footprint} alt="footprint" className='right-0 absolute top-[20%]' />
        </section>
    )
}

export default Hero