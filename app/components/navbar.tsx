"use client";
import { Button, HStack, Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const Navbar = () => {
  return (
    <HStack as="nav" justifyContent="space-between" alignItems="center" py="3">
      <Heading size="sm">Selimology</Heading>
      <HStack alignItems="center" spacing="2">
        <Button as={Link} href="/about" size="sm" variant="ghost">
          About
        </Button>
        <Button as={Link} href="/blog" size="sm" variant="ghost">
          Blog
        </Button>
        <Button as={Link} href="/contact" size="sm" variant="ghost">
          Contact
        </Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
