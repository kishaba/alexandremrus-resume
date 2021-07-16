import React from 'react';
import { RiGitRepositoryCommitsLine } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';

const UserStats = ({ user }) => {
  return (
    <p className='text-center text-white'>
      Github stats: <RiGitRepositoryCommitsLine className='inline-block' />: {user.public_repos} /
      <FiUsers className='inline-block ml-2' /> {user.followers}
    </p>
  );
};

export default UserStats;
