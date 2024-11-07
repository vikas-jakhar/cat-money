import React from 'react'
import { HOW_IT_WORKS_DATA_LIST } from '../common/Helper'
import Paragraph from '../common/Paragraph'
import redLineDot from "../../assets/images/webp/red-line-dot.webp";

const HowItWorks = () => {
    return (
        <section className='bg-light-black py-11 shadow-3xl' id='account'>
            <div className="container md:mt-7 pt-0.5">
                <h2 className='font-normal text-4xl md:text-5xl font-luckiest tracking-xl text-off-pink text-center lg:text-left !leading-3xl'>Here’s how it works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-x-10 pt-1 w-full">
                    {HOW_IT_WORKS_DATA_LIST.map((item, index) => (
                        <div key={index} className={`max-w-[522px] w-full relative sm:mt-12 mt-10 mx-auto ${index === 0 || index === 2 ? "sm:mx-0" : "mr-0"}`}>
                            <img src={item.image} alt="cat" className='sm:max-w-[200px] pointer-events-none max-w-[150px] w-full mx-auto lg:mx-0' />
                            <p className='font-bold text-white mt-5 font-comic text-center lg:text-left text-2xl md:text-custom-4xl !leading-3xl'>{item.number}. {item.title}</p>
                            <Paragraph className='mt-4 text-center lg:text-left'>{item.description}.</Paragraph>
                            {index === 2 && <img src={redLineDot} alt='redDot' className='-top-11 left-0 lg:-left-20 pointer-events-none absolute' />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks