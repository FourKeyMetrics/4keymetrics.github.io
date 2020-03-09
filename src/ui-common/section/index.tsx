import * as React from 'react';
import { ReactNode } from 'react';
import { css, cx } from 'emotion';
import { COLOR_PRIMARY, COLOR_WHITE } from '../../constants/theme';
import Content from '../content';

interface SectionProps {
  children: ReactNode;
  center?: boolean;
  bg?: 'dark' | 'light';
  className?: string;
}

const styles = css({
  padding: '40px 0',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 10,
  '&.section-center-content': {
    textAlign: 'center',
  },
  '&.section-bg-dark': {
    backgroundColor: COLOR_PRIMARY,
    color: COLOR_WHITE,
  },
});

const Section = ({ children, center = false, bg = 'light', className = '' }: SectionProps) => {
  return (<div className={cx('section', styles, `section-bg-${bg}`, {
    'section-center-content': center,
  }, className)}>
    <Content>
      {children}
    </Content>
  </div>)
};

export default Section;
