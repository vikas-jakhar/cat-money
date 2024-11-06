import './App.css';
import AsSeen from './components/home/AsSeen';
import Hero from './components/home/Hero';
import MassiveBurgerz from './components/home/MassiveBurgerz';
import WhatCatMoney from './components/home/WhatCatMoney';

function App() {
  return (
    <div className='bg-off-black'>
      <Hero />
      <MassiveBurgerz />
      <AsSeen />
      <WhatCatMoney />
    </div>
  );
}

export default App;
