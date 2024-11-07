import React from 'react'
import Paragraph from '../common/Paragraph'
import { WHAT_CAT_MONEY_DATA_LIST } from '../common/Helper'
import jackpot from "../../assets/images/webp/jackpot.webp";
import gameCat from "../../assets/images/webp/game-cat.webp";
import gameFootprint from "../../assets/images/webp/game-footprint.webp";
import catFootprint from "../../assets/images/webp/cat-footprint.webp";

const WhatCatMoney = () => {
    return (
        <section className='md:py-11 sm:py-7 py-5 relative'>
            <div className="container mb-14 pb-1 lg:-mt-2.5">
                <div className="flex justify-between items-center gap-5 lg:flex-row flex-col">
                    <div className="max-w-[630px] w-full relative z-10">
                        <h2 className='font-normal text-4xl md:text-5xl font-luckiest tracking-xl text-off-pink text-center lg:text-left !leading-3xl'>What is CatMoney Catch?</h2>
                        <p className='text-white font-barlow font-normal text-2xl sm:text-3xl text-center lg:text-left !leading-5xl mt-2 sm:mt-5'>Not just another meme token or game, CatMoney Catch is a revolutionary system designed to mix fun with real crypto earnings.</p>
                        {WHAT_CAT_MONEY_DATA_LIST.map((items, index) => (
                            <Paragraph key={index} className={`${index === 0 || index === 7 ? "md:mt-5 sm:mt-4 mt-2" : index === 2 ? "md:mt-7 sm:mt-5 mt-3 !font-bold" : index === 6 ? "!font-bold md:mt-5 sm:mt-4 mt-2 flex items-center gap-4 !text-start" : "md:mt-7 sm:mt-5 mt-3"} text-center lg:text-left`}>{index === 3 && <span className='font-bold'>Every week</span>}{index === 6 && <img src={jackpot} alt='jackpot' className='w-10 h-10' />}{items}.</Paragraph>
                        ))}
                    </div>
                    <div className="max-w-[522px] w-full relative mt-7 lg:mt-0">
                        <img src={gameCat} alt="gameCat" className='w-full relative z-10' />
                        <img src={gameFootprint} alt="gameFootprint" className='-top-[47px] -left-[76px] absolute' />
                    </div>
                </div>
            </div>
            <img src={catFootprint} alt="catFootprint" className='-bottom-14 right-5 absolute z-10 hidden sm:flex' />
        </section >
    )
}

export default WhatCatMoney