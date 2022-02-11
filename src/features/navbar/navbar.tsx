import { FC } from 'react';

import Button from '../../shared/button';
import Flex from '../../shared/flex';
import Text from '../../shared/text';

import { signOut } from '../auth/sign-out';
import { useToggleTheme } from '../../theme/switch-theme';

const Navbar: FC = () => {
  const toggleTheme = useToggleTheme();
  return (
    <Flex
      justifyContent='space-between'
      alignItems='center'
      height='50px'
      backgroundColor='text'
      color='background'
      p={2}
      position='sticky'
      top={0}
      as='nav'
    >
      <Text
        fontWeight='bold'
        color='background'
        letterSpacing={2}
        textTransform='uppercase'
      >
        Booksy
      </Text>
      <Flex as='ul' gap={4}>
        <li>
          <Button variant='outlined' color='accent' onClick={toggleTheme}>
            Switch theme
          </Button>
        </li>
        <li>
          <Button
            variant='filled'
            backgroundColor='accent'
            borderColor='accent'
            onClick={signOut}
            maxWidth='100px'
          >
            Log out
          </Button>
        </li>
      </Flex>
    </Flex>
  );
};

export default Navbar;
