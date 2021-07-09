import React from 'react';
import getUser from '../utils/getUser';

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto '>
      <div class='grid grid-cols-2 pt-16 text-white'>
        <div>
          <h1 className='text-4xl uppercase'>Olá, eu sou o ALEXANDRE MRUS</h1>
          <h2 className='font-bold text-5xl uppercase'>Desenvolvedor FullStack</h2>
          <h3>Contato</h3>
          <ul>
            <li>Linkedin</li>
          </ul>
        </div>
        <div>
          <img src='/images/avatar.png' />
        </div>
      </div>

      <p>
        Github stats: public repos: {user.public_repos} / public_gists: {user.public_gists} /
        followes: {user.followers}
      </p>
      {repos.map((repo) => {
        return (
          <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
            <h3 className='font-bold'>{repo.full_name}</h3>
            <p>
              Language: {repo.language} / Stars: {repo.stargazers_count}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { repos, user } = await getUser('kishaba');
  return {
    props: {
      repos,
      user,
    }, // will be passed to the page component as props
  };
}
export default Index;
