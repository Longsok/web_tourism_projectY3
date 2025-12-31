import React from 'react'
import Hero from './Hero/Hero';
import Popular from './Popular/Popular';
import Province from './Province/Province';

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Popular />
      <Province />
    </div>
  )
}

export default HomePage;
