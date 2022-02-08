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

import { Gap } from '../types/ui';

export interface BoxProps
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
}

const Box = styled('div', { shouldForwardProp })<BoxProps>(
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
    }),
    typography
  )
);

export default Box;
