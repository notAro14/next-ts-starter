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
} from 'styled-system';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';

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
}

const Button = styled('button', { shouldForwardProp })<ButtonProps>(
  {
    border: 'none',
    ':hover': {
      cursor: 'pointer',
    },
  },
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
    typography
  )
);

export default Button;
