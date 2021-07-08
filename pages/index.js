import React from 'react';

const Index = (props) => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl'>Olá, eu sou o Alexandre Mrus</h1>
      <h1>Bem-vindo!</h1>
      <div>{props.currentDate}</div>
      <h2 className='font-bold text-3xl'> Meus repositórios no GitHub</h2>
      {props.repos.map((repo) => {
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
  const resUser = await fetch('https://api.github.com/users/kishaba/');

  const resRepos = await fetch('https://api.github.com/users/kishaba/repos?sort=updated');
  const originalRepos = await resRepos.json();
  const dontShowRepos = ['kishaba/ProjetoLazarus', 'kishaba/ProjetoDelphi'];
  const isNotFork = (repo) => !repo.fork;
  const dontShowFilter = (repo) => dontShowRepos.indexOf(repo.full_name) === -1;
  const extractData = (repo) => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
  });
  const repos = originalRepos.filter(isNotFork).filter(dontShowFilter).map(extractData);

  return {
    props: {
      currentDate: new Date().toString(),
      repos,
    }, // will be passed to the page component as props
  };
}
export default Index;
