const Icon = ({ iconName = '', className = '' }) => {
    const IconList = {
        twitter: (
            <svg className='fill-white group-hover:fill-deep-red duration-300 ease-linear' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9014 1H22.5816L14.5415 10.1893L24 22.6938H16.5941L10.7935 15.1099L4.15628 22.6938H0.473927L9.07354 12.8649L0 1H7.59391L12.8371 7.93201L18.9014 1ZM17.6098 20.4911H19.649L6.48586 3.08706H4.29757L17.6098 20.4911Z" />
            </svg>
        ),
        telegram: (
            <svg className='fill-white group-hover:fill-deep-red duration-300 ease-linear' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.41747 15.1814L9.02047 20.7654C9.58847 20.7654 9.83447 20.5214 10.1295 20.2284L12.7925 17.6834L18.3105 21.7244C19.3225 22.2884 20.0355 21.9914 20.3085 20.7934L23.9305 3.82141L23.9315 3.82041C24.2525 2.32441 23.3905 1.73941 22.4045 2.10641L1.11447 10.2574C-0.338532 10.8214 -0.316532 11.6314 0.867468 11.9984L6.31047 13.6914L18.9535 5.78041C19.5485 5.38641 20.0895 5.60441 19.6445 5.99841L9.41747 15.1814Z" />
            </svg>
        ),
        redDotLine: (
            <svg width="244" height="324" viewBox="0 0 244 324" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M195.775 277.866C196.253 278.542 197.189 278.703 197.866 278.225C198.542 277.747 198.703 276.811 198.225 276.134L195.775 277.866ZM0.774917 1.86555L195.775 277.866L198.225 276.134L3.22508 0.134452L0.774917 1.86555Z" fill="url(#paint0_linear_0_23)" />
                <g filter="url(#filter0_d_0_23)">
                    <circle cx="197.333" cy="276.778" r="4.66667" fill="#B90000" />
                </g>
                <defs>
                    <filter id="filter0_d_0_23" x="150.667" y="230.111" width="93.3333" height="93.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_23" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="16" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.726432 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_23" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_23" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_0_23" x1="198.364" y1="275.372" x2="198.364" y2="6.69911" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#B90000" />
                        <stop offset="1" stop-color="#B90000" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        )
    };

    return (
        <span className={`flex ${className}`}>
            {iconName && IconList[iconName]}
        </span>
    );
};

export default Icon;