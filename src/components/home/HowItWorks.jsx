import React from 'react'
import { HOW_IT_WORKS_DATA_LIST } from '../common/Helper'
import Paragraph from '../common/Paragraph'
import redLineDot from "../../assets/images/png/red-line-dot.png";

const HowItWorks = () => {
    return (
        <section className='bg-light-black md:py-11 sm:py-7 py-5'>
            <div className="container mt-8 pt-0.5">
                <h2 className='font-normal text-4xl md:text-5xl font-luckiest tracking-xl text-off-pink text-center lg:text-left !leading-3xl'>Here’s how it works</h2>
                {HOW_IT_WORKS_DATA_LIST.map((data, index) => (
                    <div key={index} className={`sm:mt-12 mt-10 flex justify-between sm:flex-row flex-col gap-10 ${index === 0 ? "sm:pt-1" : ""}`}>
                        {data.map((obj) => (
                            obj.map((item, itemIndex) => (
                                <div key={itemIndex} className='max-w-[522px] w-full relative'>
                                    <img src={item.image} alt="cat" className='max-w-[200px] w-full mx-auto lg:mx-0' />
                                    <p className='font-bold text-white mt-5 font-comic text-center lg:text-left text-2xl md:text-custom-3xl !leading-3xl'>{item.number}. {item.title}</p>
                                    <Paragraph className='mt-4 text-center lg:text-left'>{item.description}.</Paragraph>
                                    {index === 1 && itemIndex === 0 && <img src={redLineDot} alt='redDot' className='-top-11 left-0 lg:-left-20 absolute' />}
                                </div>
                            ))
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HowItWorks