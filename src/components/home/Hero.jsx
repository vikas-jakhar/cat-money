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
                <p className='text-white text-center font-comic font-normal text-custom-xl !leading-4xl'>Pool Ur Moneys, Catch Da Red Dot, and Win Unlimited CheeƧburgerz!</p>
                <h2 className='mt-7 text-off-pink font-luckiest font-normal tracking-[2px] !leading-2xl text-custom-3xl text-center xl:px-14'>Hoomin...Catch the Red Dot, Win CheeSburgerz</h2>
                <div className="mt-11 flex flex-row justify-center mx-xl-0 xl:-mx-5 gap-6 xl:gap-12 relative">
                    {HERO_DATA_LIST.map((items, index) => (
                        <div key={index} className="max-w-[352px] w-full">
                            <div className="xl:h-[200px] h-[177px]">
                                <img src={items.image} alt="icon" className={index === 0 ? "ml-auto max-w-[200px] w-full" : index === 1 ? "w-full" : "w-full max-w-[402px] xl:max-w-[478px] absolute right-1 top-0.5 xl:top-auto xl:right-16"} />
                            </div>
                            <h2 className='mt-8 font-normal font-luckiest tracking-[1px] text-2xl text-white !leading-3xl'>{(index === 0 || index === 2) && <span className='text-off-pink'>{items.title}</span>} {items.subTitle} {index === 1 && <span className='text-off-pink'>{items.title}</span>}</h2>
                            <Paragraph className='mt-2'>{items.description}</Paragraph>
                        </div>
                    ))}
                </div>
            </div>
            <Icon iconName='redDotLine' className='left-[34px] absolute bottom-[29%]' />
            <img src={footprint} alt="footprint" className='right-0 absolute top-[20%]' />
        </section>
    )
}

export default Hero