import React, { useEffect, useState } from 'react';
import { NAVBAR_DATA_LIST, SOCIAL_MEDIA_DATA_LIST } from './Helper';
import Icon from './Icons';
import catMoney from "../../assets/images/webp/catmoney-logo.webp";
import Button from './Button';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        if (window.innerWidth < 768) {
            setOpen((prevOpen) => !prevOpen);
        }
    };
    useEffect(() => {
        const handleOverflow = () => {
            document.body.style.overflow = open && window.innerWidth < 768 ? "hidden" : "";
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <div className="relative z-50 md:py-7 sm:py-5 py-4">
            <div className="container">
                <nav className="flex items-center justify-between relative">
                    <a href="/" className="lg:max-w-[108px] max-w-14 sm:max-w-20 w-full"><img src={catMoney} alt="catMoney" className='w-full' /></a>
                    <div className={`${open ? "left-0 bg-off-black" : "-left-full"} flex items-center justify-center z-[90] md:bg-transparent fixed flex-col w-full h-screen top-0 md:relative md:bg-none md:flex-row gap-8 md:h-fit md:w-fit md:left-auto duration-300 ease-linear`}>
                        {NAVBAR_DATA_LIST.map((item, index) => (
                            <a key={index} href={item.url} aria-label={item.title} onClick={toggleOpen} className="text-white uppercase !leading-3xl duration-300 font-inter font-normal text-sm ease-linear w-fit relative after:absolute after:duration-300 after:ease-linear after:-bottom-1 hover:after:left-0 after:bg-off-red after:w-0 after:h-0.5 hover:after:w-full hover:after:right-auto after:right-0">
                                {item.title}
                            </a>
                        ))}
                        <Button className='text-base sm:text-lg !leading-xl'>get TOKENS</Button>
                        <div className="md:flex hidden items-center gap-2">
                            {SOCIAL_MEDIA_DATA_LIST.map((items, index) => (
                                <a key={index} href={items.url} target='_blank' aria-label="icon" rel="noreferrer" className='bg-deep-red rounded grid place-items-center w-10 h-10 duration-300 ease-linear hover:bg-white group'>
                                    <Icon iconName={items.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-4 items-center md:hidden">
                        <div className="flex items-center gap-2">
                            {SOCIAL_MEDIA_DATA_LIST.map((items, index) => (
                                <a key={index} href={items.url} target='_blank' aria-label="icon" rel="noreferrer" className='bg-deep-red rounded grid place-items-center w-10 h-10 duration-300 ease-linear hover:bg-white group'>
                                    <Icon iconName={items.icon} />
                                </a>
                            ))}
                        </div>
                        <div role="button" aria-label="menu icon" aria-expanded={open} onClick={toggleOpen} className="w-7 h-5 rounded-full relative md:hidden flex z-[100] cursor-pointer duration-300 ease-linear">
                            {[0, 1, 2].map((index) => (
                                <span key={index} className={`left-0 absolute duration-300 ease-linear bg-white h-1 rounded w-full ${index === 0 && open ? "top-1/2 -translate-y-1/2 rotate-45" : index === 0 ? "top-0" : ""} ${index === 1 && open ? "!-left-full opacity-0 top-1/2 -translate-y-1/2" : index === 1 ? "top-1/2 -translate-y-1/2" : ""} ${index === 2 && open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}></span>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;