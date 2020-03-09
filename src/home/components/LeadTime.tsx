import * as React from 'react';
import { conceptStyles } from './Concept.styles';

const LeadTime = () => {
  return (<div className={conceptStyles} id='lead-time'>
    <h2>Lead Time</h2>
    <p>“Lead time” is a term borrowed from the manufacturing method known as Lean or Toyota Production System.</p>
    <p>It is defined as the time elapsed between a customer placing an order and receiving the product ordered.</p>
    <p>Translated to the software domain,
      lead time can be described more abstractly as the time elapsed
      between the identification of a requirement and its fulfillment. </p>
  </div>)
};

export default LeadTime;
