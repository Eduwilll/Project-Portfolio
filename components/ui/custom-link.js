import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

const CustomLink = ({ href, children, ...props }) => {
  return (
    <ChakraLink as={NextLink} href={href} {...props}>
      {children}
    </ChakraLink>
  );
};

export default CustomLink;
