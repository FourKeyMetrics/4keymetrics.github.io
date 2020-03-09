import { css } from 'emotion';
import { COLOR_DARK, COLOR_TEXT } from '../../constants/theme';

export const conceptStyles = css({
  width: '80%',
  fontSize: '16px',
  marginBottom: '60px',
  ' h2': {
    padding: '15px 0',
    borderBottom: `1px solid ${COLOR_DARK}`,
  },
  ' p': {
    lineHeight: '24px',
    color: COLOR_TEXT,
  },
  '&.concept-align-right': {
    textAlign: 'right',
    margin: '0 0 60px auto',
  },
});
