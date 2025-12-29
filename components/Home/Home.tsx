import React from 'react'
import Hero from './Hero/Hero';
import Popular from './Popular/Popular';

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Popular />
    </div>
  )
}

export default HomePage;
