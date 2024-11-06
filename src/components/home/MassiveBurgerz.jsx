import React, { useState, useEffect } from 'react';
import { MASSIVE_BURGER_DATA_LIST } from '../common/Helper'
import bonusMachine from "../../assets/images/png/bonus-machine.png";
import cat from "../../assets/images/png/cat.png";
import Icon from '../common/Icons';
import Button from '../common/Button';

const MassiveBurgerz = () => {

    const [time, setTime] = useState({ d: 2, h: 15, m: 25, s: 27 });
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(({ d, h, m, s }) => {
                if (d === 0 && h === 0 && m === 0 && s === 0) {
                    clearInterval(interval);
                    return { d: 0, h: 0, m: 0, s: 0 };
                }
                s = s === 0 ? 59 : s - 1;
                m = s === 59 ? (m === 0 ? 59 : m - 1) : m;
                h = m === 59 && s === 59 ? (h === 0 ? 23 : h - 1) : h;
                d = h === 23 && m === 59 && s === 59 ? d - 1 : d;
                return { d, h, m, s };
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const format = num => String(num).padStart(2, '0');

    return (
        <section className='py-12'>
            <div className="container">
                <div className="flex justify-between gap-7 lg:gap-5 lg:flex-row flex-col items-center lg:items-start">
                    <div className="max-w-[522px] w-full">
                        <h2 className='font-normal text-4xl md:text-5xl font-luckiest tracking-2xl text-off-pink text-center lg:text-left !leading-2xl'>3 Steps to Get Massive Burgerz</h2>
                        {MASSIVE_BURGER_DATA_LIST.map((items, index) => (
                            <div key={index} className="lg:mt-10 md:mt-7 sm:mt-5 mt-3">
                                <p className='font-luckiest text-transparent text-center lg:text-left stroke-2 stroke-white text-stroke uppercase !leading-2xl text-5xl sm:text-custom-6xl md:text-custom-7xl lg:text-custom-8xl font-normal tracking-3xl'>{items.title}</p>
                                <p className='font-comic font-bold text-white text-center lg:text-left text-xl sm:text-2xl md:text-custom-3xl !leading-3xl'>{items.subTitle}</p>
                                <p className='font-barlow font-light !leading-6xl text-center lg:text-left text-white mt-2 md:mt-4 text-base sm:text-lg md:text-xl'>{items.description}</p>
                            </div>
                        ))}
                        <div className="lg:mt-10 md:mt-7 mt-5 sm:flex-row flex-col flex items-center justify-between gap-3 py-4 px-6 bg-light-black">
                            <div className="sm:max-w-[217px] w-full">
                                <p className='text-off-pink font-normal tracking-2xl font-luckiest text-custom-4xl !leading-3xl'>BONUS: </p>
                                <p className='text-white font-bold font-barlow text-xl !leading-6xl'>Get even MOAR BURGERZ with da red dot mashien</p>
                            </div>
                            <img src={bonusMachine} alt="bonusMachine" className='max-w-[233px] w-full' />
                        </div>
                    </div>
                    <div className="max-w-[630px] w-full border-4 sm:border-8 border-off-pink bg-white rounded-[40px] sm:py-10 p-5 sm:px-8 lg:px-5 xl:px-8">
                        <p className='text-center text-black font-comic font-bold text-base !leading-3xl'>Price climb in</p>
                        <div className="mt-3 mx-auto max-w-[211px] w-full flex items-center justify-between relative">
                            {[time.d, time.h, time.m, time.s].map((unit, index) => (
                                <React.Fragment key={index}>
                                    <p className="font-luckiest font-normal text-custom-4xl text-off-pink !leading-xl tracking-xl">
                                        {format(unit)}
                                    </p>
                                    {index < 3 && <p className='font-luckiest font-normal text-custom-4xl text-off-pink !leading-xl tracking-xl'>:</p>}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="mx-auto max-w-[211px] w-full flex items-center justify-between pr-3">
                            <p className='font-normal font-comic text-black text-custom-xl !leading-3xl'>Days</p>
                            <p className='font-normal font-comic text-black text-custom-xl !leading-3xl'>Hrs</p>
                            <p className='font-normal font-comic text-black text-custom-xl !leading-3xl'>Mins</p>
                            <p className='font-normal font-comic text-black text-custom-xl !leading-3xl'>Secs</p>
                        </div>
                        <h2 className='md:mt-10 sm:mt-7 mt-5 font-luckiest font-normal text-off-pink text-3xl sm:text-5xl xl:text-custom-6xl tracking-2xl !leading-2xl text-center'>Join the catMoney Catch <span className='font-luckiest text-black'>Pre-SaLE</span></h2>
                        <div className="md:mt-10 sm:mt-7 mt-5 flex gap-4 items-center sm:items-start flex-col sm:flex-row justify-between">
                            <img src={cat} alt="cat" className='max-w-[178px] w-full' />
                            <div className="max-w-[338px] w-full">
                                <p className='font-comic font-bold text-xl text-center sm:text-left sm:text-2xl xl:text-custom-2xl !leading-3xl'>Token Launches August 1</p>
                                <p className='sm:mt-2.5 mt-1.5 font-barlow font-light text-base text-center sm:text-left xl:text-lg !leading-6xl'>Every week we will use the pool to catch da red dot. When the timer hits zero, the red dot is caught and we get the jackpot.</p>
                            </div>
                        </div>
                        <h2 className='md:mt-10 sm:mt-7 mt-5 font-normal font-luckiest text-2xl sm:text-custom-4xl tracking-2xl text-center text-off-pink !leading-3xl'>How <span className='font-luckiest text-black'>many</span> CatMoney Tokens would you like to buy?</h2>
                        <div className="mt-4 mb-8 w-full border-2 border-black pb-4 sm:pb-0 sm:min-h-[143px] rounded pt-4 flex bg-off-gray relative">
                            <span className='flex absolute h-full w-[0.9px] top-0 left-1/2 bg-black -translate-x-1/2'></span>
                            <div className="w-1/2 flex flex-col items-center">
                                <p className='font-barlow font-bold text-base sm:text-lg !leading-5xl text-center'>USD you pay</p>
                                <p className='text-black opacity-30 mt-2 font-barlow font-normal text-4xl sm:text-custom-5xl !leading-5xl text-center'>$0</p>
                            </div>
                            <div className="w-1/2 flex flex-col items-center ">
                                <p className='font-barlow font-bold text-base sm:text-lg !leading-5xl text-center'>CatMoney</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <Icon iconName='footprint' />
                                    <p className='text-black opacity-30 font-barlow font-normal text-4xl sm:text-custom-5xl !leading-5xl text-center'>0</p>
                                </div>
                            </div>
                        </div>
                        <Button className='sm:text-2xl text-base !leading-2xl w-full hover:shadow-xl gap-2 sm:gap-4 hover:shadow-off-red !flex justify-center items-center'>Proceed to Checkout MEOW <Icon iconName='rightArrow' /></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MassiveBurgerz;