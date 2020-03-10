import * as React from 'react';
import profileA from '../images/profile-1.png';
import profileAMix from '../images/profile-1-mix.png';
import profileB from '../images/profile-2.png';
import profileBMix from '../images/profile-2-mix.png';
import { css } from 'emotion';
import { COLOR_DARK, COLOR_PRIMARY } from '../../constants/theme';

const profileStyles = css({
  display: 'flex',
  ' .figure': {
    position: 'relative',
    width: '36%',
    ' .profile': {
      position: 'absolute',
      display: 'block',
      backgroundColor: COLOR_PRIMARY,
      top: 0,
      left: 0,
      transition: 'opacity .5s ease-in-out',
      opacity: 1,
      '&:hover': {
        opacity: 0,
        transition: 'opacity .3s ease-in-out',
      },
    },
  },
  ' .intro': {
    width: '64%',
    ' h3': {
      fontSize: '30px',
      textTransform: 'uppercase',
    },
    ' p': {
      lineHeight: '30px',
    }
  },
});

const dividerStyles = css({
  margin: '40px 0',
  borderTop: `1px solid ${COLOR_DARK}`,
});

const Profile = () => {
  return (<div>
    <div className={profileStyles}>
      <div className='figure'>
        <img src={profileA} alt="Profile A" className='profile' />
        <img src={profileAMix} alt="Profile A" className='profile-mix' />
      </div>
      <div className='intro'>
        <h3>Feng Daijun</h3>
        <p>Daijun is the co-founder of 4KeyMetrics, bringing his rich experience of working with C-level leaderships
          in his previous jobs. After recognizing the common problems from C-level people across different industries,
          he decided to start his own business to focus and help people to solve them.</p>
        <p>In his previous role as director in a consulting company, Daijun has led development teams comprised of
          more than 300 engineers, work in harmony to more than 300 engineers.</p>
      </div>
    </div>
    <div className={dividerStyles} />
    <div className={profileStyles}>
      <div className='figure'>
        <img src={profileB} alt="Profile B" className='profile' />
        <img src={profileBMix} alt="Profile B" className='profile-mix' />
      </div>
      <div className='intro'>
        <h3>Wei Yin</h3>
        <p>Before founding 4KeyMetrics, Yin was a co-founder at JiliJili, which was an educational tool
          for k-12 students to study online.</p>
        <p>With more than a decade of experience in IT industry, Yin has rich practical experience with
          designing and deploying large-scale distributed systems, infrastructure, and complex IT environments
          with hundreds of thousands of end users.</p>
      </div>
    </div>
  </div>)
};

export default Profile;
