import * as React from 'react';
import Page from '../ui-common/page';
import Section from '../ui-common/section';
import Contact from './components/Contact';
import Banner from './components/Banner';
import PageNav from './components/PageNav';
import LeadTime from './components/LeadTime';
import DeploymentFrequency from './components/DeploymentFrequency';
import ChangeFailPercentage from './components/ChangeFailPercentage';
import MeanTimeToRestore from './components/MeanTimeToRestore';
import Why from './components/Why';
import How from './components/How';

const Home = () => {
  return (<Page>
    <Banner/>
    <PageNav />
    <Why />
    <How/>
    <Section>
      <LeadTime />
      <DeploymentFrequency />
      <MeanTimeToRestore/>
      <ChangeFailPercentage/>
    </Section>
    <Contact/>
  </Page>)
};

export default Home;
