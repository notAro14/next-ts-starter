import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
  variant,
} from 'styled-system';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import css from '@styled-system/css';

import { Gap, TextTransform } from '../types/ui';

export interface ButtonProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {
  gap?: Gap;
  textTransform?: TextTransform;
  variant?: string;
}

const Button = styled('button', { shouldForwardProp })<ButtonProps>(
  css({
    paddingX: 4,
    paddingY: 1,
    borderRadius: '2px',
    width: '100%',
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
    ':hover': {
      cursor: 'pointer',
    },
  }),
  compose(
    background,
    border,
    color,
    flexbox,
    layout,
    position,
    shadow,
    space,
    system({
      gap: {
        property: 'gap',
        scale: 'space',
      },
      textTransform: true,
    }),
    typography,
    variant({
      scale: 'buttons',
    })
  )
);

export default Button;
