import { FC } from 'react';
import NextLink from 'next/link';

import Flex from 'shared/flex';
import Link from 'shared/link';

interface SocialLinkProps {
  href: string;
}

const SocialLink: FC<SocialLinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link color='background' textDecoration='none'>
        {children}
      </Link>
    </NextLink>
  );
};

const SOCIAL_LINKS = [
  {
    title: 'Github',
    href: 'https://github.com/notAro14/next-ts-starter',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/notarodev',
  },
];

const Footer: FC = () => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      as='footer'
      height={50}
      backgroundColor='text'
      color='background'
    >
      <Flex gap={4} as='ul'>
        {SOCIAL_LINKS.map(({ title, href }) => (
          <li key={title}>
            <SocialLink href={href}>{title}</SocialLink>
          </li>
        ))}
      </Flex>
    </Flex>
  );
};

export default Footer;
