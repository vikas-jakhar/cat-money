import React from "react";
import Marquee from "react-fast-marquee";

const AsSeen = () => {
    const repeatedDivs = React.Children.toArray(
        Array(4).fill(
            <div className="sm:w-[290px] w-[150px] h-14 sm:h-[72px] bg-white mx-3 sm:mx-5"></div>
        )
    );
    return (
        <section className="sm:my-10 my-4 bg-deep-black" id="whitepaper">
            <div className="container pb-8 pt-1.5">
                <p className="my-4 font-comic font-normal text-xl text-white !leading-7xl text-center">As seen in...</p>
                <Marquee speed="100" direction="left" gradient={false} pauseOnHover={true}>
                    {repeatedDivs}
                </Marquee>
            </div>
        </section>
    )
}

export default AsSeen