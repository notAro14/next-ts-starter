import styled from '@emotion/styled';
import {
  color,
  ColorProps,
  compose,
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
} from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

import { TextTransform } from '../types/ui';

interface LinkProps
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps {
  textTransform?: TextTransform;
  textDecoration?: string;
}

const Link = styled('a', { shouldForwardProp })<LinkProps>(
  compose(
    border,
    color,
    flexbox,
    layout,
    position,
    space,
    system({
      textTransform: true,
      textDecoration: true,
    }),
    typography
  )
);

export default Link;
