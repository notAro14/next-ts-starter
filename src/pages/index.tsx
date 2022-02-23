import Head from 'next/head';
import { ReactElement, FC } from 'react';

import Heading from 'shared/heading';
import { useColorMode, useToggleColorMode } from 'theme/color-mode';
import { NextPageWithLayout } from 'types';
import GlobalLayout from 'shared/layouts/global-layout';
import VStack from 'shared/v-stack';
import BaseButton, {
  ButtonVariant,
  ButtonSize,
} from 'shared/button/base-button';
import HStack from 'shared/h-stack';

const IndexPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Next and styled system starter</title>
      </Head>
      <Heading as='h1' color='primary' fontFamily='primary'>
        Hello world
      </Heading>
      <VStack gap={6}>
        <HStack gap={3} alignItems='flex-end'>
          <ToggleThemeBtn variant='filled.primary' />
          <ToggleThemeBtn variant='filled.primary' size='medium' />
          <ToggleThemeBtn variant='filled.primary' size='big' />
        </HStack>
        <HStack gap={3} alignItems='flex-end'>
          <ToggleThemeBtn variant='outlined.primary' />
          <ToggleThemeBtn variant='outlined.primary' size='medium' />
          <ToggleThemeBtn variant='outlined.primary' size='big' />
        </HStack>
      </VStack>
    </>
  );
};

IndexPage.getLayout = (page: ReactElement) => (
  <GlobalLayout>
    <VStack as='main' p={4} maxWidth='fit-content' mx='auto'>
      {page}
    </VStack>
  </GlobalLayout>
);

interface ToggleThemeBtnProps extends ButtonVariant, ButtonSize {}

const ToggleThemeBtn: FC<ToggleThemeBtnProps> = ({
  variant = 'filled',
  size = 'small',
}) => {
  const colorMode = useColorMode();
  const toggle = useToggleColorMode();
  return (
    <BaseButton size={size} variant={variant} onClick={toggle}>
      {colorMode}
    </BaseButton>
  );
};

export default IndexPage;
