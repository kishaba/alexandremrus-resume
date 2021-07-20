import React from 'react';
import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className='text-center relative border-purple border rounded px-16 pb-4 pt-8  mt-6 w-72 md:w-96 ml-10 md:ml-16'>
      <h3 className='absolute top-0 -mt-6 text-2xl py-2 px-8 font-bold uppercase bg-purple'>
        Contato
      </h3>
      <p>
        <a href='https://linkedin.com/in/alexandre-mrus' title='LinkedIn Profile'>
          <FaLinkedin className='tet-3xl md:text-6xl inline-block mr-6' />
        </a>
        <a href='https://github.com/kishaba' title='GitHub Profile'>
          <FaGithub className='text-3xl md:text-6xl inline-block mr-6' />
        </a>
        <a href='alexandre.azevedo.mrus@gmail.com' title='mail'>
          <FaMailBulk className='text-3xl md:text-6xl inline-block mr-6' />
        </a>
      </p>
    </div>
  );
};

export default ContactMe;
