import React from 'react'
import Paragraph from './../common/Paragraph';
import { THE_MAGIC_DATA_LIST } from '../common/Helper';

const TheMagic = () => {
    return (
        <section className='lg:py-16 md:py-14 py-10'>
            <div className="container pt-3 xl:mb-16 xl:pb-2 lg:mb-10">
                <Paragraph className='max-w-[630px] w-full'>The magic happens through our innovative pooling and reward mechanism, where contributions are funneled back into the community.</Paragraph>
                <Paragraph className='max-w-[630px] w-full lg:mt-9 md:mt-7 sm:mt-5 mt-3'>Each successful red dot catch triggers the purchase and immediate burning of CatMoney Tokens, increasing demand, reducing supply, and driving prices to the moon. Pool ur moneys, catch da red dot, and watch ur returns skyrocket!</Paragraph>
                <div className="lg:mt-20 md:mt-16 sm:mt-14 mt-10 grid grid-cols-1 max-w-[1183px] sm:grid-cols-2 justify-between gap-y-10 md:gap-y-12 lg:gap-y-16 gap-x-5 md:gap-x-10">
                    {THE_MAGIC_DATA_LIST.map((items, index) => (
                        <div key={index} className={`max-w-[534px] w-full flex gap-6 ${index === 1 || index === 3 || index === 5 ? "sm:ml-auto" : ""}`}>
                            <img src={items.image} alt="cat-icon" className='lg:w-24 pointer-events-none lg:h-24 w-16 h-16' />
                            <div className="flex flex-col">
                                <p className='text-white font-comic font-bold text-lg md:text-xl lg:text-2xl !leading-3xl'>{items.title}:</p>
                                <Paragraph className='mt-2'>{items.description}</Paragraph>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TheMagic
