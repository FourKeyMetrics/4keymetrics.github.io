import * as React from 'react';
import Section from '../../ui-common/section';
import icon from '../images/statistics.svg';
import { css } from 'emotion';
import { MAX_M } from '../../constants/theme';

const styles = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ' .icon': {
    marginLeft: '30px',
    width: '30%',
    ' img': {
      width: '100%',
      maxWidth: '100%',
    }
  },
  ' ul li': {
    lineHeight: '24px',
  },
  [MAX_M]: {
    display: 'block',
    ' .icon': {
      display: 'none',
    },
  },
});

const Why = () => {
  return (<Section>
    <div className={styles}>
      <div>
        <h2>Why four key metrics matter?</h2>
        <p>With years of experience on the market, we found that
          these four key metrics are a simple and yet powerful tool to help
          leaders and teams focus on measuring and improving what matters.</p>
        <p>They are:</p>
        <ul>
          <li>Lead time</li>
          <li>Deployment frequency</li>
          <li>Mean time to restore (MTTR)</li>
          <li>Change fail percentage</li>
        </ul>
        <p>We focus on helping organizations understand and start to measure these metrics from today.</p>
      </div>
      <div className='icon'>
        <img src={icon} alt='4 key metrics' />
      </div>
    </div>
  </Section>);
};

export default Why;
