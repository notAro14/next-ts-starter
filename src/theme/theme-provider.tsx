import { FC } from 'react';
import allThemes, { getTheme } from 'theme';
import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  css,
} from '@emotion/react';

import {
  ColorModeProvider,
  ToggleColorModeProvider,
  useColorModeParent,
} from 'theme/color-mode';

const { theme: blueTheme, reducer } = allThemes.blue;

const ThemeProvider: FC = ({ children }) => {
  const [colorMode, toggle] = useColorModeParent(reducer, 'light');
  const theme = getTheme(blueTheme, colorMode);
  return (
    <>
      <Global
        styles={css`
          @import url('${theme.fonts.src}');
        `}
      />
      <EmotionThemeProvider theme={theme}>
        <ColorModeProvider colorMode={colorMode}>
          <ToggleColorModeProvider toggle={toggle}>
            {children}
          </ToggleColorModeProvider>
        </ColorModeProvider>
      </EmotionThemeProvider>
    </>
  );
};

export default ThemeProvider;
