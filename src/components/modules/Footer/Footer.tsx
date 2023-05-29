import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  github: 'https://github.com/einstein-core/einpunk-boilerplate-.git/',
  forum: 'https://t.me/einpunkUSD',
  einpunk: 'https://einpunk-boilerplate-kuqf.vercel.app/',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      <Text>
        ⭐️ Please star this{' '}
        <Link href={links.github} isExternal alignItems={'center'}>
          boilerplate <ExternalLinkIcon />
        </Link>
        , every star makes us very happy!
      </Text>
      <Text>
        🙋 You have questions? Ask them on the{' '}
        <Link href={links.forum} isExternal alignItems={'center'}>
          Einpunk forum <ExternalLinkIcon />
        </Link>
      </Text>
      <Text>
        📖 Join protocol community{' '}
        <Link href={links.einpunk} isExternal alignItems={'center'}>
          Einpunk <ExternalLinkIcon />
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
