const Heading = ({
    reduceBelow = 1024,
    maxFontSize = 64,
    minFontSize = 36,
    className = '',
    children,
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <h2 {...props} style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }} className={`${className} font-normal font-luckiest tracking-xl text-off-pink text-center lg:text-left !leading-3xl`}>
            {children}
        </h2>
    );
};

export default Heading;