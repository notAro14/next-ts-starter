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

import { TextTransform } from '../types/ui';

export interface InputProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {
  textTransform?: TextTransform;
}

const Input = styled('input', { shouldForwardProp })<InputProps>(
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
      textTransform: true,
    }),
    typography
  )
);

export default Input;
