import { useState, useEffect, useRef } from "react";
import { FAQS_DATA_LIST } from "../common/Helper";
import Icon from "../common/Icons";

const Faqs = () => {

    const [openIndex, setOpenIndx] = useState(0);
    const contentRefs = useRef([]);
    useEffect(() => {
        contentRefs.current = contentRefs.current.slice(0, FAQS_DATA_LIST.length);
        if (openIndex !== null && contentRefs.current[openIndex]) {
            contentRefs.current[openIndex].style.maxHeight = getHeight(openIndex);
        }
    }, [openIndex]);
    const handleToggle = (index) => {
        setOpenIndx(openIndex === index ? null : index);
        if (openIndex !== null && contentRefs.current[openIndex]) {
            contentRefs.current[openIndex].style.maxHeight = '0px';
        }
    };
    const getHeight = (index) => {
        if (contentRefs.current[index]) {
            return contentRefs.current[index].scrollHeight + 'px';
        }
        return '0px';
    };
    useEffect(() => {
        const handleResize = () => {
            if (openIndex !== null && contentRefs.current[openIndex]) {
                contentRefs.current[openIndex].style.maxHeight = getHeight(openIndex);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [openIndex]);

    return (
        <section>
            <div className="container pb-14 md:pb-16 xl:pb-[165px]">
                <h2 className='font-normal text-4xl md:text-[64px] font-luckiest tracking-xl text-off-pink text-center lg:text-left !leading-3xl'>FAQ</h2>
                <div className="mt-5 sm:mt-8 lg:mt-[53px] flex flex-col gap-3 sm:gap-4">
                    {FAQS_DATA_LIST.map((item, index) => (
                        <div key={index} className="overflow-hidden flex bg-light-black !duration-500 transition-all">
                            <div className="accordion w-full">
                                <div
                                    role="button"
                                    className="flex items-center p-4 sm:p-6 lg:px-10 lg:py-8 justify-between gap-5 w-full"
                                    onClick={() => handleToggle(index)}
                                    aria-expanded={openIndex === index}
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            handleToggle(index);
                                        }
                                    }}
                                >
                                    <h3 className="text-white font-bold font-comic !leading-3xl text-lg sm:text-xl md:text-2xl text-start">
                                        {item.question}?
                                    </h3>
                                    <div className={`${openIndex === index ? 'rotate-180' : ''} duration-300 ease-linear`}>
                                        <Icon iconName='faqsQueArrow' />
                                    </div>
                                </div>
                                <div
                                    ref={(el) => {
                                        contentRefs.current[index] = el;
                                    }}
                                    className={`overflow-hidden duration-300 ease-linear ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                                    style={{
                                        maxHeight: openIndex === index ? getHeight(index) : '0px',
                                    }}
                                >
                                    <div className={`font-barlow text-base sm:text-lg text-white font-light md:text-xl flex p-4 sm:p-6 lg:px-10 lg:py-8 !pt-0 flex-col gap-3 !leading-6xl ${index === 4 ? "" : "lg:gap-7"}`}>
                                        {item.answer}
                                        <span className={index === 0 ? "" : "hidden"}>The CatMoney Token will then be listed on Uniswap at $0.20. Early participants that took part in the presale will realize up to 20x gain!</span>
                                        <span className={index === 0 ? "" : "hidden"}>Also, the presale is necessary to provide liquidity for building the Red Dot Catching Machine. Instead of going the traditional route with venture capitalists, we chose a community-first approach. This way, we not only raise liquidity for the project but also share profits with our community.</span>
                                        <li className={index === 4 ? "" : "hidden"}>Hold Your Tokens: Keep them safe in your wallet and watch their value potentially grow as the project progresses.</li>
                                        <li className={index === 4 ? "" : "hidden"}>Participate in Raffles: Use your tokens to enter the weekly and monthly red dot chases for a chance to win massive rewards.</li>
                                        <li className={index === 4 ? "" : "hidden"}>Stake or Provide Liquidity: Engage in our Liquidity Mining and Staking programs to earn additional tokens.</li>
                                        <li className={index === 4 ? "" : "hidden"}>Join the Community: Connect with fellow cat lovers and crypto enthusiasts on our social platforms.</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
            <p className="py-4 text-center px-5 font-comic text-xs sm:text-sm !leading-3xl text-white">© {new Date().getFullYear()} CatMoney. ALL RIGHTS RESERVED. PRIVACY POLICY. TERMS OF USE</p>
        </section >
    );
};

export default Faqs;
