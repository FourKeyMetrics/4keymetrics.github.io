import * as React from 'react';
import Content from '../ui-common/content';
import { css } from 'emotion';
import { COLOR_DARK } from '../constants/theme';

const styles = css({
  fontSize: '12px',
  color: COLOR_DARK,
})

const Footer = () => {
  return (<footer className={styles}>
    <Content>
      <p>© 2020 4keymetrics. All rights reserved.</p>
    </Content>
  </footer>)
};

export default Footer;
