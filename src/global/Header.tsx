import * as React from 'react';
import Content from '../ui-common/content';
import { css } from 'emotion';
import { COLOR_PRIMARY, COLOR_WHITE, HEADER_HEIGHT } from '../constants/theme';
import { Link } from 'react-router-dom';
import Button from '../ui-common/button';
import { SALES_EMAIL } from '../constants/site';

const styles = css({
  background: COLOR_PRIMARY,
  color: COLOR_WHITE,
  height: HEADER_HEIGHT,
  lineHeight: HEADER_HEIGHT,
  position: 'fixed',
  top: 0,
  zIndex: 9999,
  width: '100%',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.36)',
  ' .logo a': {
    textDecoration: 'none',
    color: COLOR_WHITE,
    fontFamily: 'cursive, monospace, serif',
  },
  ' a': {
    textDecoration: 'none',
    color: COLOR_WHITE,
  },
});

const wrapperStyles = css({
  display: 'flex',
  ' .nav': {
    flexGrow: 1,
    padding: '0 40px',
    fontsize: '14px',
  },
});

const Header = () => {
  return (<header className={styles}>
    <Content>
      <div className={wrapperStyles}>
        <div className='logo'><a href="/">4KeyMetrics</a></div>
        <div className='nav'><Link to='/about'>About</Link></div>
        <div>
          <Button size='small' href={`mailto:${SALES_EMAIL}`}>Contact us</Button>
        </div>
      </div>
    </Content>
  </header>)
};

export default Header;
