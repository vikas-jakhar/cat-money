import React from 'react'
import Heading from '../common/Heading'
import circleGraph from "../../assets/images/webp/circle-graph.webp";
import viewGraph from "../../assets/images/webp/small-view-graph.webp";
import { TOKENDISTRIBUTION_DATA_LIST } from '../common/Helper';

const Tokenomics = () => {
    return (
        <section className='bg-light-black lg:py-20 md:py-16 sm:py-14 py-12'>
            <div className="container lg:mb-2">
                <Heading>TOKENOMICS</Heading>
                <p className='text-center lg:text-left text-white font-comic font-bold sm:text-4xl text-2xl md:text-custom-6xl !leading-5xl mt-0.5'><span className='font-comic mr-1 tracking-3xl'>1.</span>5B Total Tokens. No Tax.</p>
                <p className='sm:mt-4 mt-2 text-white text-center lg:text-left font-barlow font-normal md:text-3xl sm:text-2xl text-xl !leading-6xl'>Token Contract Address (0x081051.....asf)</p>
                <div className="sm:mt-11 mt-8 flex justify-between items-center lg:flex-row flex-col xl:items-start gap-3">
                    <img src={circleGraph} alt="circleGraph" className='max-w-[555px] pointer-events-none w-full ml-xl-8 hidden xl:flex' />
                    <img src={viewGraph} alt="viewGraph" className='sm:max-w-[400px] pointer-events-none max-w-[250px] w-full xl:hidden' />
                    <div className="max-w-[722px] w-full xl:pt-4">
                        {TOKENDISTRIBUTION_DATA_LIST.map((items, index) => (
                            <div key={index} className="flex gap-4 justify-between items-start mt-5 sm:mt-8 xl:mt-10">
                                <span className={`flex rounded-full mt-2 sm:mt-3 p-3 xl:hidden sm:p-5 ${index === 2 || index === 4 || index === 2 ? "bg-off-brown" : index === 0 ? "bg-off-white" : index === 1 ? "bg-off-pink" : index === 3 ? "bg-deep-brown" : "bg-light-brown"}`}></span>
                                <p className={`text-transparent text-stroke text-4xl sm:text-custom-8xl xl:text-custom-9xl font-luckiest tracking-3xl font-normal !leading-2xl ${index === 6 ? "sm:mr-7 mr-4" : ""}`}>{items.percentage}%</p>
                                <div className="flex flex-col max-w-[556px] w-full">
                                    <p className='text-white font-bold text-xl sm:text-custom-2xl font-comic !leading-5xl'>{items.title}</p>
                                    <p className={`mt-2 text-white font-light font-barlow !leading-6xl ${index === 0 || index === 1 || index === 2 || index === 3 ? "sm:text-base text-sm" : "sm:text-xl text-lg"}`}>{items.description}{index === 6 && <span className='font-bold'> 24 months </span>}{index === 6 && <>to demonstrate the team's commitment.</>}</p>
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