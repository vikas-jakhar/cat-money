import React from 'react'
import Paragraph from './../common/Paragraph';
import { THE_MAGIC_DATA_LIST } from '../common/Helper';

const TheMagic = () => {
    return (
        <section className='lg:py-16 md:py-14 py-12'>
            <div className="container pt-3 lg:mb-20 md:mb-10 sm:mb-5 pb-0.5">
                <Paragraph className='max-w-[630px] w-full'>The magic happens through our innovative pooling and reward mechanism, where contributions are funneled back into the community.</Paragraph>
                <Paragraph className='max-w-[630px] w-full mt-9'>Each successful red dot catch triggers the purchase and immediate burning of CatMoney Tokens, increasing demand, reducing supply, and driving prices to the moon. Pool ur moneys, catch da red dot, and watch ur returns skyrocket!</Paragraph>
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 justify-between gap-y-16 gap-x-10">
                    {THE_MAGIC_DATA_LIST.map((items, index) => (
                        <div key={index} className={`max-w-[534px] w-full flex gap-6 ${index === 1 ? "ml-auto" : ""}`}>
                            <img src={items.image} alt="cat-icon" className='w-24 h-24' />
                            <div className="flex flex-col">
                                <p className='text-white font-comic font-bold text-2xl !leading-3xl'>{items.title}:</p>
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
