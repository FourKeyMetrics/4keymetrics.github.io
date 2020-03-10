import * as React from 'react';
import Section from '../../ui-common/section';

interface WhyProps {

}

const Why = (props: WhyProps) => {
  return (<Section>
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
  </Section>);
};

export default Why;
