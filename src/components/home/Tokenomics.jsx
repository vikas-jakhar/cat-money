import React from 'react'
import Heading from '../common/Heading'
import circleGraph from "../../assets/images/png/circle-graph.png";
import { TOKENDISTRIBUTION_DATA_LIST } from '../common/Helper';

const Tokenomics = () => {
    return (
        <section className='bg-light-black lg:py-20 md:py-16 sm:py-14 py-12'>
            <div className="container lg:pb-2.5">
                <Heading>TOKENOMICS</Heading>
                <p className='text-center lg:text-left text-white font-comic font-bold text-custom-lg !leading-5xl'>1.5B Total Tokens. No Tax.</p>
                <p className='mt-4 text-white font-barlow font-normal text-3xl !leading-6xl'>Token Contract Address (0x081051.....asf)</p>
                <div className="mt-12 pt-1 flex justify-between items-start gap-3">
                    <img src={circleGraph} alt="circleGraph" className='max-w-[555px] w-full' />
                    <div className="max-w-[722px] w-full pt-4">
                        {TOKENDISTRIBUTION_DATA_LIST.map((items, index) => (
                            <div key={index} className="flex gap-4 justify-between mt-10">
                                <p className='text-transparent text-stroke text-custom-xs font-luckiest tracking-3xl font-normal !leading-2xl'>{items.percentage}%</p>
                                <div className="flex flex-col max-w-[556px] w-full">
                                    <p className='text-white font-bold text-custom-sm font-comic !leading-5xl'>{items.title}</p>
                                    <p className={`mt-2 text-white font-light font-barlow !leading-6xl ${index === 0 || index === 1 || index === 2 || index === 3 ? "text-base" : "text-xl"}`}>{items.description}{index === 6 && <span className='font-bold'> 24 months </span>}{index === 6 && <>to demonstrate the team's commitment.</>}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tokenomics