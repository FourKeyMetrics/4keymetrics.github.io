import * as React from 'react';
import Content from '../ui-common/content';
import { css } from 'emotion';
import { COLOR_PRIMARY, COLOR_WHITE } from '../constants/theme';

const styles = css({
  background: COLOR_PRIMARY,
  color: COLOR_WHITE,
  height: '60px',
  lineHeight: '60px',
  ' a': {
    textDecoration: 'none',
    color: COLOR_WHITE,
  }
});

const Header = () => {
  return (<header className={styles}>
    <Content>
      <a href="/">4KeyMetrics</a>
    </Content>
  </header>)
};

export default Header;
