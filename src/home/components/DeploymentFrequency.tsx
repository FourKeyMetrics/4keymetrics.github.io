import * as React from 'react';
import { conceptStyles } from './Concept.styles';
import { cx } from 'emotion';

const DeploymentFrequency = () => {
  return (<div className={cx(conceptStyles, 'concept-align-right')} id='deployment-frequency'>
    <h2>Deployment frequency</h2>
    <p>The deployment frequency metric tracks the frequency of deployments.</p>
    <p>The objective of DevOps is to develop and deploy smaller deployments more frequently,
      as reducing the size of deployments and the amount of changes for each cycle
      makes it easier to test and release the deployment.</p>
    <p>Therefore, a larger amount of releases with smaller changes is more favorable than fewer releases with larger changes.</p>
    <p>Measuring this metric involves tracking the amount of deployments not only in production,
      but in the staging and testing environments as well.</p>
  </div>);
};

export default DeploymentFrequency;
