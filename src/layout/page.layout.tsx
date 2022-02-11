import { FC, ElementType } from 'react';
import { Toaster } from 'react-hot-toast';

import AppShell from '../features/app-shell';
import Box from '../shared/box';
import Navbar from '../features/navbar';

interface PageLayoutProps {
  as?: ElementType;
}

const PageLayout: FC<PageLayoutProps> = ({ children, as = 'section' }) => {
  return (
    <Box fontFamily='body' backgroundColor='background' height='100%' as={as}>
      <AppShell>
        <Navbar />
        {children}
      </AppShell>
      <Toaster position='bottom-center' />
    </Box>
  );
};

export default PageLayout;
