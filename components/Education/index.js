import React from 'react';
import EducationItem from './EducationItem';

const degrees = [
  {
    degree: 'Formação Acadêmica',
    subject: 'Ciência da computação',
    institution: 'UPF - Universidade de Passo Fundo',
  },
  {
    degree: 'Certificações',
    subject: 'Scrum Foundation Professional Certificatec',
    institution: 'CertiProf',
  },
];

const Education = () => {
  return (
    <div>
      <h3 className='text-4xl text-white text-center font-bold uppercase mt-10 mb-5 text-purple'>
        Formação
      </h3>
      <div className='md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg py-6  px-6 mx-6 md:mx-0 md:px-12 '>
        {degrees.map((degree, i) => (
          <EducationItem key={'i' + i} degree={degree} />
        ))}
      </div>
    </div>
  );
};

export default Education;
