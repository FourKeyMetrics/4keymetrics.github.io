import { ReactNode } from 'react';
import * as React from 'react';
import { css, cx } from 'emotion';
import { COLOR_PRIMARY, COLOR_WHITE, CONTENT_WIDTH } from '../../constants/theme';

interface SectionProps {
  children: ReactNode;
  center?: boolean;
  bg?: 'dark' | 'light';
}

const styles = css({
  padding: '40px 0',
  ' > .content': {
    width: CONTENT_WIDTH,
    maxWidth: '100%',
    margin: '0 auto',
  },
  '&.section-center-content': {
    textAlign: 'center',
  },
  '&.section-bg-dark': {
    backgroundColor: COLOR_PRIMARY,
    color: COLOR_WHITE,
  },
});

const Section = ({ children, center = false, bg = 'light' }: SectionProps) => {
  return (<div className={cx('section', styles, `section-bg-${bg}`, {
    'section-center-content': center,
  })}>
    <div className='content'>
      { children }
    </div>
  </div>)
};

export default Section;
