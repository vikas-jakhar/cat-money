import { useState } from "react";
import { FAQS_DATA_LIST } from "../common/Helper";
import Icon from "../common/Icons";

const Faqs = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section>
            <div className="container pb-14 md:pb-16 xl:pb-[165px]">
                <h2 className='font-normal text-4xl md:text-[64px] font-luckiest tracking-xl text-off-pink text-center lg:text-left !leading-3xl'>FAQ</h2>
                <div className="mt-5 sm:mt-8 lg:mt-[53px] flex flex-col gap-3 sm:gap-4">
                    {FAQS_DATA_LIST.map((item, index) => (
                        <div className="bg-light-black p-5 sm:p-6 lg:px-10 lg:py-8 !duration-500 transition-all">
                            <button onClick={() => handleToggle(index)} className="flex items-center justify-between gap-5 w-full">
                                <span className="text-white font-bold font-comic !leading-3xl text-lg sm:text-xl md:text-2xl text-start">{item.question}?</span>
                                <span className={`duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"}`}><Icon iconName="faqsQueArrow" /></span>
                            </button>
                            <div className={`grid overflow-hidden !duration-500 transition-all ${activeIndex === index ? "grid-rows-[1fr] opacity-100 h-fit max-h-[500px]" : "max-h-0 grid-rows-[0fr] opacity-0"}`}>
                                <p className={`font-barlow text-base sm:text-lg text-white font-light md:text-xl pt-4 md:pt-8 flex flex-col gap-3 !leading-6xl ${index === 4 ? "" : "lg:gap-7"}`}>{item.answer}
                                    {activeIndex === index && index === 0 && <>
                                        <span>   The CatMoney Token will then be listed on Uniswap at $0.20. Early participants that took part in the presale will realize up to 20x gain!</span>
                                        <span> Also, the presale is necessary to provide liquidity for building the Red Dot Catching Machine. Instead of going the traditional route with venture capitalists, we chose a community-first approach. This way, we not only raise liquidity for the project but also share profits with our community.</span></>}
                                    {activeIndex === index && index === 4 && <><li>Hold Your Tokens: Keep them safe in your wallet and watch their value potentially grow as the project progresses.</li><li>Participate in Raffles: Use your tokens to enter the weekly and monthly red dot chases for a chance to win massive rewards.</li><li>Stake or Provide Liquidity: Engage in our Liquidity Mining and Staking programs to earn additional tokens.</li><li>Join the Community: Connect with fellow cat lovers and crypto enthusiasts on our social platforms.</li></>}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
            <p className="py-4 text-center px-5 font-comic text-sm !leading-3xl text-white">© {new Date().getFullYear()} CatMoney. ALL RIGHTS RESERVED. PRIVACY POLICY. TERMS OF USE</p>
        </section >
    )
}

export default Faqs