import React from 'react';
import { RiGitRepositoryCommitsLine } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import { GoStar } from 'react-icons/go';

const Repos = ({ user, repos }) => {
  return (
    <div>
      <h3 className='text-4xl text-white text-center font-bold uppercase mt-10 text-purple'>
        Tech contributions
      </h3>
      <p className='text-center text-white'>
        Github stats: <RiGitRepositoryCommitsLine className='inline-block' />: {user.public_repos} /
        <FiUsers className='inline-block ml-2' /> {user.followers}
      </p>
      <div className='md:grid md:grid-cols-3 md:gap-3 my-6'>
        {repos.map((repo) => {
          return (
            <div
              key={repo.id}
              className='rounded bg-white my-4 p-4 hover:shadow-md rounded-lg py-6  px-6 mx-6 md:mx-0 md:px-12'
            >
              <h3 className='font-bold hover:underline'>
                <a href={'https://github.com/' + repo.full_name}>{repo.full_name}</a>
              </h3>
              <p>
                Language: {repo.language} / <GoStar className='inline-block' /> Stars:{' '}
                {repo.stargazers_count}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Repos;
