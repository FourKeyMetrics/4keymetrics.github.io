import * as React from 'react';
import Section from '../../ui-common/section';
import banner from '../images/home-banner.png';
import { css } from 'emotion';
import { MAX_M } from '../../constants/theme';

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
  [MAX_M]: {
    ' img.bg': {
      width: 'auto',
    },
    ' h1': {
      fontSize: '36px',
      ' span': {
        padding: '15px',
      },
    },
    ' p': {
      fontSize: '14px',
    },
  },
});

const Banner = () => {
  return (<Section center bg='dark' className={bannerStyles}>
    <img src={banner} alt='4 key metrics home' className='bg'/>
    <h1><span>Four Key Metrics</span></h1>
    <p>Four areas where organizations must accelerate.</p>
  </Section>);
};

export default Banner;
