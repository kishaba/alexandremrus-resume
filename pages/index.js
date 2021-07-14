import React from 'react';
import getUser from '../utils/getUser';
import { RiGitRepositoryCommitsLine } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import { GoStar } from 'react-icons/Go';
import PageHead from '../components/PageHead';
import Hero from '../components/Hero';

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto '>
      <PageHead />
      <Hero />

      <div className='bg-white rounded-lg shadow-lg py-12 px-16'>
        <h3 className='text-4xl text-center font-bold uppercase text-purple'> Serviços </h3>
        <p className='text-2xl'>Desenvolvedor Node.Js</p>
      </div>

      <div>
        <h3 className='text-4xl text-white text-center font-bold uppercase mt-10 mb-5 text-purple'>
          Formação
        </h3>
        <div className='grid grid-cols-2 leading-none bg-white rounded-lg shadow-lg py-6 px-12 '>
          {[1, 2].map((i) => (
            <div className='border-dashed  border-l-2 px-12'>
              <h4 className='text-lg uppercase font-bold mb-2 text-purple'>Formação Acadêmica</h4>
              <p className='text-2xl uppercase'>Ciência da computação</p>
              <span className='text-lg normal-case'>UPF - Universidade de Passo Fundo</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className='text-4xl text-white text-center font-bold uppercase mt-10 text-purple'>
          Tech contributions
        </h3>
        <p className='text-center text-white'>
          Github stats: <RiGitRepositoryCommitsLine className='inline-block' />: {user.public_repos}{' '}
          /
          <FiUsers className='inline-block ml-2' /> {user.followers}
        </p>
        <div className='md:grid md:grid-cols-3 md:gap-3 my-6'>
          {repos.map((repo) => {
            return (
              <div key={repo.id} className='rounded bg-white my-4 p-4 hover:shadow-md rounded-lg'>
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

      <div>
        <p className='text-center text-white my-8 py-4 border-t-2'>
          Você pode achar o fonte desse site em:
          <br />
          <a href='https://github.com/kishaba/alexandremrus-resume'>
            https://github.com/kishaba/alexandremrus-resume
          </a>
        </p>
      </div>
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
