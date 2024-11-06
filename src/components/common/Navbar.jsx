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
        <div className="relative z-50 py-5 lg:py-8">
            <div className="container lg:py-0.5">
                <nav className="flex items-center justify-between relative">
                    <a href="/" className="w-[108px] h-[124px]"><img src={catMoney} alt="catMoney" className='w-full' /></a>
                    <div className={`${open ? "left-0 bg-white" : "-left-full"} flex items-center justify-center z-[90] lg:bg-transparent fixed flex-col w-full h-screen top-0 lg:relative lg:bg-none lg:flex-row gap-7 xl:gap-10 lg:h-fit lg:w-fit lg:left-auto duration-300 ease-linear`}>
                        {NAVBAR_DATA_LIST.map((item, index) => (
                            <a key={index} href={item.url} aria-label={item.title} onClick={toggleOpen} className="text-off-black menu-link font-normal capitalize text-base tracking-xl duration-300 ease-linear w-fit relative after:absolute after:duration-300 after:ease-linear after:bottom-0.5 after:-left-px after:bg-off-yellow after:w-0 after:h-0.5 hover:after:w-5">
                                {item.title}
                            </a>
                        ))}
                        <div className="flex items-center gap-3.5 sm:hidden">
                            {SOCIAL_MEDIA_DATA_LIST.map((items, index) => (
                                <a key={index} href={items.url} target='_blank' rel="noreferrer" className='w-fit relative group'>
                                    <Icon iconName={items.icon} className='top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 z-10' />
                                    <Icon iconName='brownEllipse' />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-6 items-center">
                        <div className="sm:flex items-center gap-3.5 hidden">
                            {SOCIAL_MEDIA_DATA_LIST.map((items, index) => (
                                <a key={index} href={items.url} target='_blank' rel="noreferrer" className='w-fit relative group'>
                                    <Icon iconName={items.icon} className='top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 z-10' />
                                    <Icon iconName='brownEllipse' />
                                </a>
                            ))}
                        </div>
                        <div role="button" aria-label="menu icon" aria-expanded={open} onClick={toggleOpen} className="w-7 h-5 rounded-full relative lg:hidden flex z-[100] cursor-pointer duration-300 ease-linear">
                            {[0, 1, 2].map((index) => (
                                <span key={index} className={`left-0 absolute duration-300 ease-linear bg-off-black h-1 rounded w-full ${index === 0 && open ? "top-1/2 -translate-y-1/2 rotate-45" : index === 0 ? "top-0" : ""} ${index === 1 && open ? "!-left-full opacity-0 top-1/2 -translate-y-1/2" : index === 1 ? "top-1/2 -translate-y-1/2" : ""} ${index === 2 && open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}></span>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;