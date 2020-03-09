import * as React from 'react';
import Content from '../ui-common/content';
import { css } from 'emotion';
import { COLOR_PRIMARY, COLOR_WHITE, HEADER_HEIGHT } from '../constants/theme';

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
  ' a': {
    textDecoration: 'none',
    color: COLOR_WHITE,
    fontFamily: 'cursive, monospace, serif',
  },
});

const Header = () => {
  return (<header className={styles}>
    <Content>
      <a href="/">4KeyMetrics</a>
    </Content>
  </header>)
};

export default Header;
