import React from 'react';
import { GoStar } from 'react-icons/go';

const Repo = ({ repo }) => {
  return (
    <div className='rounded bg-white my-4 p-4 hover:shadow-md rounded-lg py-6  px-6 mx-6 md:mx-0 md:px-12'>
      <h3 className='font-bold hover:underline'>
        <a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a>
      </h3>
      <p>
        Language: {repo.language} / <GoStar className='inline-block' /> Stars:{' '}
        {repo.stargazers_count}
      </p>
    </div>
  );
};

export default Repo;
