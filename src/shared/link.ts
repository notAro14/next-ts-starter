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
import css from '@styled-system/css';
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
}

const Link = styled('a', { shouldForwardProp })<LinkProps>(
  css({
    color: 'text',
    textDecoration: 'none',
  }),
  compose(
    border,
    color,
    flexbox,
    layout,
    position,
    space,
    system({
      textTransform: true,
    }),
    typography
  )
);

export default Link;
