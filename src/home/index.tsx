import * as React from 'react';
import Page from '../ui-common/page';
import Section from '../ui-common/section';
import banner from './images/home-banner.png';
import { css } from 'emotion';

const bannerStyles = css({
  minHeight: '240px',
  ' img.bg': {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
  },
  ' h1': {
    fontSize: '50px',
    ' span': {
      background: 'rgba(0, 0, 0, 0.64)',
      padding: '15px 60px',
    },
  },
  ' p': {
    background: 'rgba(0, 0, 0, 0.64)',
    padding: '10px',
    display: 'inline-block',
  },
});

const Home = () => {
  return (<Page>
      <Section center bg='dark' className={bannerStyles}>
        <img src={banner} alt='4 key metrics home' className='bg' />
        <h1><span>Four Key Metrics</span></h1>
        <p>Four areas where organizations must accelerate.</p>
      </Section>
      <Section>
        <h2>Lead time</h2>
        <h2>Deployment frequency</h2>
        <h2>Mean time to restore</h2>
        <h2>Change fail percentage</h2>
      </Section>
      <Section bg='dark'>
        <h2>Contact us</h2>
        <p>Email: sales@4keymetrics.com</p>
      </Section>
    </Page>)
};

export default Home;
