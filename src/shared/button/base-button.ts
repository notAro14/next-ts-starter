import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import css from '@styled-system/css';

import { SystemStyleProps } from 'types/ui';
import { variant } from 'styled-system';
import { getSystemStyleProps, sx } from 'utils/ui';

export type ButtonVariant = {
  variant?: 'filled' | 'outlined' | 'filled.primary' | 'outlined.primary';
};
export type ButtonSize = { size?: 'small' | 'medium' | 'big' };

const outlinedBase = {
  backgroundColor: 'transparent',
};
const outlinedPrimary = {
  ...outlinedBase,
  color: 'accent',
};
const outlined = {
  ...outlinedBase,
  primary: outlinedPrimary,
};

const filledBase = {};
const filled = {
  ...filledBase,
  primary: {
    backgroundColor: 'accent',
    borderColor: 'accent',
    color: 'background',
  },
};

const BaseButton = styled('button', { shouldForwardProp })<
  SystemStyleProps & ButtonVariant & ButtonSize
>`
  ${css({
    border: '1px solid',
    borderRadius: 'sm',
    fontFamily: 'primary',
    fontWeight: 700,
    lineHeight: '1',
    ':hover': {
      cursor: 'pointer',
    },
    textTransform: 'capitalize',
  })}
  ${variant({
    variants: {
      filled,
      outlined,
    },
  })}
  ${variant({
    prop: 'size',
    variants: {
      small: {
        py: 1,
        px: 2,
        fontSize: 'xs',
      },
      medium: {
        py: 2,
        px: 4,
        fontSize: 'md',
      },
      big: {
        py: 3,
        px: 6,
        fontSize: 'xl',
      },
    },
  })}
  ${getSystemStyleProps()}
  ${(props) => sx(props.sx)}
`;

export default BaseButton;
