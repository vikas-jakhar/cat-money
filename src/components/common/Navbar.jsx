import React, { useEffect, useState } from 'react';
import { NAVBAR_DATA_LIST, SOCIAL_MEDIA_DATA_LIST } from './Helper';
import Icon from './Icons';
import catMoney from "../../assets/images/png/catmoney-logo.png";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        if (window.innerWidth < 1024) {
            setOpen((prevOpen) => !prevOpen);
        }
    };
    useEffect(() => {
        const handleOverflow = () => {
            document.body.style.overflow = open && window.innerWidth < 1024 ? "hidden" : "";
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <div className="relative z-50 py-7">
            <div className="container">
                <nav className="flex items-center justify-between relative">
                    <a href="/" className="w-[108px] h-[124px]"><img src={catMoney} alt="catMoney" className='w-full' /></a>
                    <div className={`${open ? "left-0 bg-white" : "-left-full"} flex items-center justify-center z-[90] lg:bg-transparent fixed flex-col w-full h-screen top-0 lg:relative lg:bg-none lg:flex-row gap-8 lg:h-fit lg:w-fit lg:left-auto duration-300 ease-linear`}>
                        {NAVBAR_DATA_LIST.map((item, index) => (
                            <a key={index} href={item.url} aria-label={item.title} onClick={toggleOpen} className="text-white uppercase duration-300 font-inter font-normal text-sm ease-linear w-fit relative after:absolute after:duration-300 after:ease-linear after:-bottom-1 hover:after:left-0 after:bg-off-red after:w-0 after:h-0.5 hover:after:w-full hover:after:right-auto after:right-0">
                                {item.title}
                            </a>
                        ))}
                        <button className="overflow-hidden duration-300 ease-linear rounded-lg text-white uppercase pt-5 pb-4 px-[26.5px] bg-linear-gradient-red z-[1] relative group">
                            <span className='uppercase text-lg leading-xl font-luckiest'>get TOKENS</span>
                            <span className='z-10 uppercase text-lg leading-xl font-luckiest absolute pt-6 pb-[18px] px-[25.5px] bg-white -top-full text-deep-red w-full h-full duration-300 ease-linear left-0 group-hover:top-0'>get TOKENS</span>
                        </button>
                        <div className="flex items-center gap-2">
                            {SOCIAL_MEDIA_DATA_LIST.map((items, index) => (
                                <a key={index} href={items.url} target='_blank' rel="noreferrer" className='bg-deep-red grid place-items-center w-10 h-10 duration-300 ease-linear hover:bg-white group'>
                                    <Icon iconName={items.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div role="button" aria-label="menu icon" aria-expanded={open} onClick={toggleOpen} className="w-7 h-5 rounded-full relative lg:hidden flex z-[100] cursor-pointer duration-300 ease-linear">
                        {[0, 1, 2].map((index) => (
                            <span key={index} className={`left-0 absolute duration-300 ease-linear bg-white h-1 rounded w-full ${index === 0 && open ? "top-1/2 -translate-y-1/2 rotate-45" : index === 0 ? "top-0" : ""} ${index === 1 && open ? "!-left-full opacity-0 top-1/2 -translate-y-1/2" : index === 1 ? "top-1/2 -translate-y-1/2" : ""} ${index === 2 && open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}></span>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;