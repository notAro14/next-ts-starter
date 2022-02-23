import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import css from '@styled-system/css';

import { SystemStyleProps } from 'types/ui';
import { getSystemStyleProps, sx } from 'utils/ui';

const BaseButton = styled('button', { shouldForwardProp })<SystemStyleProps>`
  ${css({
    backgroundColor: 'accent',
    border: '1px solid',
    borderColor: 'accent',
    borderRadius: 'sm',
    color: 'background',
    fontFamily: 'primary',
    fontWeight: 700,
    py: 1,
    px: 2,
    ':hover': {
      cursor: 'pointer',
    },
    textTransform: 'capitalize',
  })}
  ${getSystemStyleProps()}
  ${(props) => sx(props.sx)}
`;

export default BaseButton;
