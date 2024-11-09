const Button = ({ children, className = '', ...props }) => {
    return (
        <button className={`overflow-hidden duration-300 ease-linear rounded-lg text-white uppercase lg:py-[21px] pt-4 pb-3 px-5 lg:px-[26.5px] bg-linear-gradient-red z-[1] relative group ${className}`} {...props}>
            <span className='uppercase font-luckiest font-normal flex items-center gap-2 sm:gap-4'>{children}</span>
            <span className={`z-10 uppercase font-luckiest absolute grid place-items-center bg-white -top-full text-deep-red w-full h-full duration-300 ease-linear left-0 group-hover:top-0 ${className}`}>{children}</span>
        </button>
    );
};

export default Button;