import * as React from 'react';
import { ReactNode } from 'react';
import { css, cx } from 'emotion';
import { CONTENT_WIDTH } from '../../constants/theme';

interface ContentProps {
  children: ReactNode;
}

const styles = css({
  width: CONTENT_WIDTH,
  margin: '0 auto',
  maxWidth: '100%',
});

const Content = ({ children }: ContentProps) => {
  return (<div className={cx('content', styles)}>{children}</div>)
};

export default Content;
