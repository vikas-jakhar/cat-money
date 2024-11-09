import React from 'react'
import { TIMELINE_PHASE_DATA_LIST } from '../common/Helper'
import Icon from '../common/Icons'
import Heading from '../common/Heading'

const Roadmap = () => {
    return (
        <section className='lg:py-20 md:pt-16 md:pb-4 py-12'>
            <div className='container lg:py-16 lg:my-0.5'>
                <Heading>Our roadmap</Heading>
                <div className='mt-6 sm:mt-10 lg:mt-[54px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-start'>
                    {TIMELINE_PHASE_DATA_LIST.map((item, index) => (
                        <div key={index} className='relative pl-10 sm:pl-0 h-full pb-8 sm:pb-12 xl:pb-0'>
                            <p className='font-luckiest text-2xl md:text-custom-5xl text-white !leading-3xl tracking-2xl mt-1.5 sm:mt-0'>Q{item.quarter}</p>
                            <div className='flex max-sm:flex-col items-center sm:mt-2 max-sm:absolute top-0 -left-2 max-sm:h-full'>
                                <Icon iconName='timelineIcon' />
                                <span className='bg-off-pink flex w-0.5 sm:w-full h-full sm:h-0.5'></span>
                            </div>
                            <div className={`mt-4 sm:mt-8 xl:mt-[54px] sm:pr-6 ${index === 0 ? "xl:pr-8" : index === 1 ? "xl:pl-2 xl:pr-6" : "xl:px-4"}`}>
                                <p className='font-luckiest text-transparent stroke-2 stroke-white text-stroke uppercase !leading-2xl text-4xl sm:text-5xl md:text-custom-7xl font-normal tracking-3xl'>Phase {index + 1}</p>
                                <p className='font-comic font-bold text-white text-lg md:text-xl lg:text-custom-2xl !leading-3xl mt-1.5 sm:mt-2 lg:mt-3 xl:mt-6'>{item.title}</p>
                                <ul className='flex flex-col mt-2.5 sm:mt-4 gap-2 sm:gap-3 xl:gap-5 font-barlow text-white font-light text-base sm:text-lg !leading-3xl list-disc pl-5 xl:pl-7'>
                                    {item.description.map((description, lastIndex) => (
                                        <li key={lastIndex}>{description}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Roadmap