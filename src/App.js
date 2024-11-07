import './App.css';
import PreLoader from './components/common/PreLoader';
import ScrollToTop from './components/common/ScrollToTop';
import AsSeen from './components/home/AsSeen';
import Faqs from './components/home/Faqs';
import Hero from './components/home/Hero';
import HowItWorks from './components/home/HowItWorks';
import MassiveBurgerz from './components/home/MassiveBurgerz';
import Roadmap from './components/home/Roadmap';
import TheMagic from './components/home/TheMagic';
import Tokenomics from './components/home/Tokenomics';
import WhatCatMoney from './components/home/WhatCatMoney';

function App() {
  return (
    <div className='bg-off-black'>
      <Hero />
      <MassiveBurgerz />
      <AsSeen />
      <WhatCatMoney />
      <HowItWorks />
      <TheMagic />
      <Tokenomics />
      <Roadmap />
      <Faqs />
      <ScrollToTop />
      <PreLoader />
    </div>
  );
}

export default App;
