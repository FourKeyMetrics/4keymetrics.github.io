import React from 'react';
import { cx, css } from 'emotion';

interface IButtonProps {
  onClick: () => void;
  text: string;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
}

const styles = css({
  border: 'none',
  margin: '8px 0',
  borderRadius: '4px',
  background: '#225FFB',
  padding: '8px 16px',
  color: '#FFFFFF',
  fontSize: '1.2rem',
  cursor: 'pointer',
  '&:hover': {
    opacity: .9,
  },
  '&.secondary': {
    background: '#299350',
  },
  '&:disabled': {
    background: '#999',
  },
});

export const Button = (props: IButtonProps) => {
  const { text, onClick, type = 'primary', disabled = false } = props;
  return (<button className={cx(styles, type)} disabled={disabled} onClick={onClick}>{text}</button>)
};
