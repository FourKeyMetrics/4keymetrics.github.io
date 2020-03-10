import * as React from 'react';
import Section from '../../ui-common/section';
import Button from '../../ui-common/button';

const Contact = () => {
  return (<Section bg='dark'>
    <h2>Contact us</h2>
    <p>If you have any questions regarding to four key metrics,</p>
    <p>or you want to know more about how it can help you with your business.</p>
    <p>Feel free to contact us.</p>
    <div className='cta'>
      <Button href='mailto:sales@4keymetrics.com'>Email</Button>
    </div>
  </Section>);
};

export default Contact;
