const Button = ({ children, className = '', ...props }) => {
    return (
        <button className={`overflow-hidden duration-300 ease-linear rounded-[10px] text-white uppercase py-3 lg:py-[21px] hover:shadow-4xl z-[1] relative group bg-off-black hover:text-off-black ${className}`} {...props} >
            <span className='font-bold relative z-10 text-sm sm:text-custom-2xl sm:leading-6 tracking-2xl'>{children}</span>
            <span className="h-0 w-0 duration-300 ease-linear -z-10 flex opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-180 group-hover:h-24 bg-white group-hover:w-[120%]"></span>
        </button>
    );
};

export default Button;