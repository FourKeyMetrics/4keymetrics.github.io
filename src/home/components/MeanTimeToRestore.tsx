import * as React from 'react';
import { conceptStyles } from './Concept.styles';

const MeanTimeToRestore = () => {
  return (<div className={conceptStyles} id='mttr'>
    <h2>Mean time to restore</h2>
    <p>Mean time to recovery (MTTR) is the average time that a device will take to recover from any failure.</p>
    <p>Examples of such devices range from self-resetting fuses (where the MTTR would be very short, probably seconds),
      up to whole systems which have to be repaired or replaced.</p>
  </div>);
};

export default MeanTimeToRestore;
