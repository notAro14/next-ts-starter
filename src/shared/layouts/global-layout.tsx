import { FC } from 'react';

import Box from 'shared/box';

const GlobalLayout: FC = ({ children }) => {
  return (
    <Box as='main' p={4} minHeight='100%' backgroundColor='background'>
      {children}
    </Box>
  );
};

export default GlobalLayout;
