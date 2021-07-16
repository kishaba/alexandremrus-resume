import React from 'react';

import Repo from './Repo';
import UserStats from './UserStats';

const Repos = ({ user, repos }) => {
  return (
    <div>
      <h3 className='text-4xl text-white text-center font-bold uppercase mt-10 text-purple'>
        Tech contributions
      </h3>
      <UserStats user={user} />
      <div className='md:grid md:grid-cols-3 md:gap-3 my-6'>
        {repos.map((repo) => {
          return <Repo key={repo.id} repo={repo} />;
        })}
      </div>
    </div>
  );
};

export default Repos;
