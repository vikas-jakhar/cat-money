import React from "react";
import Marquee from "react-fast-marquee";

const AsSeen = () => {
    const repeatedDivs = React.Children.toArray(
        Array(4).fill(
            <div className="w-[290px] h-[72px] bg-white mx-5"></div>
        )
    );
    return (
        <section className="my-9 bg-deep-black">
            <div className="container pb-8">
                <p className="my-4 font-comic font-normal text-xl text-white !leading-7xl text-center">As seen in...</p>
                <Marquee speed="100" direction="left" gradient={false} pauseOnHover={true}>
                    {repeatedDivs}
                </Marquee>
            </div>
        </section>
    )
}

export default AsSeen