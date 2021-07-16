import React from 'react';

const EducationItem = ({ degree }) => {
  //return <pre>{JSON.stringify(degree)}</pre>;
  return (
    <div className='border-dashed border-t md:border-t-0 md:border-l px-12'>
      <h4 className='text-lg uppercase font-bold mb-2 text-purple'>{degree.degree}</h4>
      <p className='text-2xl uppercase'>{degree.subject}</p>
      <span className='text-lg normal-case'>{degree.institution}</span>
    </div>
  );
};

export default EducationItem;
