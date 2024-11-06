const Paragraph = ({
    reduceBelow = 768,
    maxFontSize = 17,
    minFontSize = 14,
    className = '',
    children,
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <p {...props} style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }} className={`text-off-black opacity-65 font-normal leading-6 tracking-2xl ${className}`}>
            {children}
        </p>
    );
};

export default Paragraph;