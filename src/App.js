import './App.css';
import AsSeen from './components/home/AsSeen';
import Hero from './components/home/Hero';
import HowItWorks from './components/home/HowItWorks';
import MassiveBurgerz from './components/home/MassiveBurgerz';
import WhatCatMoney from './components/home/WhatCatMoney';

function App() {
  return (
    <div className='bg-off-black'>
      <Hero />
      <MassiveBurgerz />
      <AsSeen />
      <WhatCatMoney />
      <HowItWorks />
    </div>
  );
}

export default App;
