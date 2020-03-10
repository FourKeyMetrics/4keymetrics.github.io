import Page from '../ui-common/page';
import * as React from 'react';
import Section from '../ui-common/section';
import Banner from '../home/components/Banner';
import { css } from 'emotion';
import Profile from './components/Profile';

const pageStyles = css({
  ' h2': {
    fontSize: '16px',
    textTransform: 'uppercase',
  },
});

const About = () => {
  return (<Page>
    <Banner/>
    <Section className={pageStyles}>
      <h1>About <i>4KeyMetrics</i></h1>
      <h2>What we do</h2>
      <p><i>4KeyMetrics</i> is a consulting company with delivery capability that
      helps organizations who want to reduce time to market.</p>
      <p>Our mission is to bring continuous improving culture to our customers,
        empower them to recognize problems, figure our solutions,
        start their first steps to improve continuously,
        together with us.</p>
      <p>Unlike other consulting companies or individual consultants,
        we have experienced delivery teams to put our suggestions into practice.</p>
    </Section>
    <Section bg='dark' className={pageStyles}>
      <h2>Who we are</h2>
      <Profile/>
    </Section>
  </Page>)
};

export default About;
