import * as React from 'react';
import Section from '../../ui-common/section';
import { css } from 'emotion';
import { COLOR_LIGHT, COLOR_PRIMARY, COLOR_WHITE, MAX_M } from '../../constants/theme';
import assessImg from '../images/notepad.svg';
import targetImg from '../images/target.svg';
import motherboardImg from '../images/motherboard.svg';
import modelImg from '../images/model.svg';

interface HowProps {

}

const containerStyles = css({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '40px',
  position: 'relative',
  ' .line': {
    zIndex: -1,
    borderBottom: `1px dashed ${COLOR_WHITE}`,
    width: '100%',
    position: 'absolute',
    top: '50%',
  },
  [MAX_M]: {
    display: 'block',
    ' .line': {
      display: 'none',
    },
  },
});

const boxStyles = css({
  border: `1px solid ${COLOR_LIGHT}`,
  background: COLOR_PRIMARY,
  padding: '20px 15px',
  width: '20%',
  textAlign: 'center',
  ' p': {
    fontSize: '14px',
    color: COLOR_LIGHT,
    lineHeight: '20px',
  },
  ' h3': {
    marginTop: '15px',
  },
  ' .icon': {
    width: '40px',
    marginTop: '5px',
  },
  [MAX_M]: {
    width: '100%',
    marginTop: '30px',
  }
});

const How = (props: HowProps) => {
  return (<Section bg='dark'>
    <h2>How we will help you achieve</h2>
    <div className={containerStyles}>
      <div className='line'/>
      <div className={boxStyles}>
        <img src={assessImg} alt="Assess" className='icon'/>
        <h3>Assess</h3>
        <p>Understand your current situation</p>
      </div>
      <div className={boxStyles}>
        <img src={targetImg} alt="Customize measurements" className='icon'/>
        <h3>Customize measurements</h3>
        <p>Aimed for your business success with more relevant indices.</p>
      </div>
      <div className={boxStyles}>
        <img src={motherboardImg} alt="Toolchain" className='icon'/>
        <h3>Toolchain</h3>
        <p>Integrate a customized toolchain to help monitor and analysis your metrics.</p>
      </div>
      <div className={boxStyles}>
        <img src={modelImg} alt="Continuous improving" className='icon'/>
        <h3>Continuous improving</h3>
        <p>Regular review and enhance the process.</p>
      </div>
    </div>
  </Section>);
};

export default How;
