import React from 'react';
import getUser from '../utils/getUser';
import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto '>
      <div className='grid grid-cols-2 pt-16 text-white leading-none h-screen'>
        <div className='pt-32'>
          <h1 className='text-3xl uppercase  pl-16'>Olá, eu sou o ALEXANDRE MRUS</h1>
          <h2 className='font-bold text-4xl uppercase  pl-16'>Desenvolvedor FullStack</h2>
          <div className='relative border-purple border rounded px-16 pb-4 pt-8  mt-6 w-96 ml-16'>
            <h3 className='absolute top-0 -mt-6 text-2xl py-2 px-6 font-bold uppercase bg-purple'>
              Contato
            </h3>
            <p>
              <FaLinkedin className='text-6xl inline-block mr-6' />
              <FaGithub className='text-6xl inline-block mr-6' />
              <FaMailBulk className='text-6xl inline-block mr-6' />
            </p>
          </div>
        </div>
        <div className='pt-32'>
          {/* <img className='w-96 mb-48' src='/images/avatar.png' /> */}
          <div className='caixa'>
            <p className='stars'></p>
            <p className='stars2'></p>
          </div>
        </div>
      </div>

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
            <div className='border-dashed border-l-2 px-12'>
              <h4 className='text-lg uppercase font-bold mb-2 text-purple'>Formação Acadêmica</h4>
              <p className='text-2xl uppercase'>Ciência da computação</p>
              <span className='text-lg normal-case'>UPF - Universidade de Passo Fundo</span>
            </div>
          ))}
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
