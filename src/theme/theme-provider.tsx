import { FC } from 'react';
import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  css,
} from '@emotion/react';

import allThemes from 'theme';
//import { getTheme } from 'theme/get-theme';
import {
  ColorModeProvider,
  ToggleColorModeProvider,
  useColorModeParent,
} from 'theme/color-mode';

const { theme: blueTheme, reducer } = allThemes.blue;

const ThemeProvider: FC = ({ children }) => {
  const [colorMode, toggle] = useColorModeParent(reducer, 'light');
  const {
    colors: { modes },
  } = blueTheme;
  const currentColors = modes[colorMode];
  const theme = {
    ...blueTheme,
    colors: { ...blueTheme.colors, ...currentColors, modes },
  };
  //const theme = getTheme(blueTheme, colorMode) as typeof blueTheme;
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
