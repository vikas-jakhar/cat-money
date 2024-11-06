import React from 'react'
import Heading from '../common/Heading'
import circleGraph from "../../assets/images/png/circle-graph.png";

const Tokenomics = () => {
    return (
        <section className='bg-light-black lg:py-20 md:py-16 sm:py-14 py-12'>
            <div className="container lg:pb-2.5">
                <Heading>TOKENOMICS</Heading>
                <p className='text-center lg:text-left text-white font-comic font-bold text-custom-lg !leading-5xl'>1.5B Total Tokens. No Tax.</p>
                <p className='mt-4 text-white font-barlow font-normal text-3xl !leading-6xl'>Token Contract Address (0x081051.....asf)</p>
                <div className="mt-12 pt-1 flex justify-between gap-3">
                    <img src={circleGraph} alt="circleGraph" className='max-w-[555px] w-full' />
                    <div className="max-w-[722px] w-full">
                        <div className="flex gap-4">
                            <p className='text-transparent text-stroke text-custom-xs font-luckiest tracking-3xl font-normal !leading-2xl'>20%</p>
                            <div className=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tokenomics