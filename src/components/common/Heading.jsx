const Heading = ({
    reduceBelow = 1024,
    maxFontSize = 48,
    minFontSize = 30,
    className = '',
    children,
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <h2 {...props} style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }} className={`${className} font-bold leading-8 md:leading-9 lg:leading-custom-3xl -tracking-xl`}>
            {children}
        </h2>
    );
};

export default Heading;