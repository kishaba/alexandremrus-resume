import React from 'react';
import getUser from '../utils/getUser';
import PageHead from '../components/PageHead';
import Hero from '../components/Hero';
import Summary from '../components/Summary';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Repos from '../components/Repos/Index';

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto px-2 md:px-4'>
      <PageHead />
      <Hero />
      <Summary />
      <Education />
      <Repos user={user} repos={repos} />
      <Footer />
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
