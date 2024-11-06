const Icon = ({ iconName = '', className = '' }) => {
    const IconList = {
        twitter: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9014 1H22.5816L14.5415 10.1893L24 22.6938H16.5941L10.7935 15.1099L4.15628 22.6938H0.473927L9.07354 12.8649L0 1H7.59391L12.8371 7.93201L18.9014 1ZM17.6098 20.4911H19.649L6.48586 3.08706H4.29757L17.6098 20.4911Z" fill="white" />
            </svg>
        ),
        telegram: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.41747 15.1814L9.02047 20.7654C9.58847 20.7654 9.83447 20.5214 10.1295 20.2284L12.7925 17.6834L18.3105 21.7244C19.3225 22.2884 20.0355 21.9914 20.3085 20.7934L23.9305 3.82141L23.9315 3.82041C24.2525 2.32441 23.3905 1.73941 22.4045 2.10641L1.11447 10.2574C-0.338532 10.8214 -0.316532 11.6314 0.867468 11.9984L6.31047 13.6914L18.9535 5.78041C19.5485 5.38641 20.0895 5.60441 19.6445 5.99841L9.41747 15.1814Z" fill="white" />
            </svg>
        ),
    };

    return (
        <span className={`flex ${className}`}>
            {iconName && IconList[iconName]}
        </span>
    );
};

export default Icon;