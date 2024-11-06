const Paragraph = ({
    reduceBelow = 768,
    maxFontSize = 18,
    minFontSize = 14,
    className = '',
    children,
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <p {...props} style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }} className={`text-white font-light font-barlow !leading-6xl ${className}`}>
            {children}
        </p>
    );
};

export default Paragraph;