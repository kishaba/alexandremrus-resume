import React from 'react';
import ContactMe from './ContactMe';

const Hero = () => {
  return (
    <div className='md:grid md:grid-cols-2 pt-16 text-white leading-none h-screen'>
      <div className='pt-32'>
        <h1 className=' text:2-xl md:text-3xl uppercase pl-10 md:pl-16'>
          Olá, eu sou o <strong>ALEXANDRE MRUS</strong>
        </h1>
        <h2 className='font-bold text:3xl md:text-4xl uppercase  pl-10  md:pl-16'>
          Desenvolvedor FullStack
        </h2>
        <ContactMe />
      </div>
      <div className='pl-8 pt-32'>
        {/* <img className='w-96 mb-48' src='/images/avatar.png' /> */}
        <div className='caixa'>
          <p className='stars'></p>
          <p className='stars2'></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
