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

interface HeadingProps
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    TypographyProps {
  textTransform?: TextTransform;
}

const Heading = styled('h2', { shouldForwardProp })<HeadingProps>(
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

export default Heading;
