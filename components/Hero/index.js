import React from 'react';
import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';

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
        <div className='text-center relative border-purple border rounded px-16 pb-4 pt-8  mt-6 w-72 md:w-96 ml-10 md:ml-16'>
          <h3 className='absolute top-0 -mt-6 text-2xl py-2 px-8 font-bold uppercase bg-purple'>
            Contato
          </h3>
          <p>
            <FaLinkedin className='tet-3xl md:text-6xl inline-block mr-6' />
            <FaGithub className='text-3xl md:text-6xl inline-block mr-6' />
            <FaMailBulk className='text-3xl md:text-6xl inline-block mr-6' />
          </p>
        </div>
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
