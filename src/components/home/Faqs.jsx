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
                            <div className={`grid overflow-hidden !duration-500 transition-all ${activeIndex === index ? "grid-rows-[1fr] opacity-100" : "h-0 grid-rows-[0fr] opacity-0"}`}>
                                <p className="font-barlow text-base sm:text-lg text-white font-light md:text-xl pt-4 md:pt-8 flex flex-col gap-3 lg:gap-7 !leading-6xl">{item.answer}</p>
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