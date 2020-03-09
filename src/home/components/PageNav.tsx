import * as React from 'react';
import Content from '../../ui-common/content';
import { css } from 'emotion';
import { COLOR_PRIMARY, COLOR_WHITE } from '../../constants/theme';

const navStyles = css({
  background: COLOR_PRIMARY,
  fontSize: '14px',
  ' a': {
    textDecoration: 'none',
    color: COLOR_WHITE,
    transition: 'opacity .3s ease-in',
    '&:hover': {
      opacity: .6,
    }
  },
  ' ul': {
    margin: 0,
    listStyle: 'none',
    color: COLOR_WHITE,
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const PageNav = () => {
  return (<div className={navStyles}>
    <Content>
      <ul>
        <li><i>Concept:</i></li>
        <li><a href="#lead-time">Lead Time</a></li>
        <li><a href="#deployment-frequency">Deployment frequency</a></li>
        <li><a href="#mttr">Mean time to restore</a></li>
        <li><a href="#change-fail-percentage">Change fail percentage</a></li>
      </ul>
    </Content>
  </div>)
};

export default PageNav;
