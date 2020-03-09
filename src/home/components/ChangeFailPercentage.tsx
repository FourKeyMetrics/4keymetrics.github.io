import * as React from 'react';
import { conceptStyles } from './Concept.styles';
import { cx } from 'emotion';

const ChangeFailPercentage = () => {
  return (<div className={cx(conceptStyles, 'concept-align-right')} id='change-fail-percentage'>
    <h2>Change fail percentage</h2>
    <p>Change fail percentage is a measure of the percentage of changes that result in a failure.</p>
    <p>This metric is represented as a percentage.</p>
    <p>It is the answer to questions like
      “what percentage of changes break builds” and “what percentage of deployments result in a service outage”.</p>
  </div>);
};

export default ChangeFailPercentage;
