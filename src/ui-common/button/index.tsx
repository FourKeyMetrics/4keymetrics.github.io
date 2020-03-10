import React, { ReactNode } from 'react';
import { cx, css } from 'emotion';
import { COLOR_PRIMARY, COLOR_WHITE } from '../../constants/theme';

interface ButtonProps {
  onClick?: () => void;
  href?: string;
  children: ReactNode;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  size?: 'small' | 'default' | 'large';
}

const styles = css({
  margin: '8px 0',
  color: '#FFFFFF',
  fontSize: '16px',
  border: `1px solid ${COLOR_WHITE}`,
  padding: '0 24px',
  minWidth: '120px',
  textAlign: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  lineHeight: '40px',
  display: 'inline-block',
  transition: 'background-color .3s, color, .3s',
  '&:hover': {
    backgroundColor: COLOR_WHITE,
    color: COLOR_PRIMARY,
  },
  '&.secondary': {
    background: '#299350',
  },
  '&:disabled': {
    background: '#999',
  },
  '&.button-small': {
    fontSize: '14px',
    lineHeight: '30px',
    padding: '0 16px',
    minWidth: '80px',
  },
});

const Button = (props: ButtonProps) => {
  const { children, onClick, type = 'primary', disabled = false, href, size = 'default' } = props;
  if (href) {
    return (<a className={cx(styles, type, `button-${size}`)} href={href}>{children}</a>)
  } else {
    return (<button className={cx(styles, type)} disabled={disabled} onClick={onClick}>{children}</button>)
  }
};

export default Button;
