"use client";
import { Link } from "@chakra-ui/next-js";
import { Divider, SimpleGrid, VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

const firstColumnLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

const Footer = () => {
  const pathname = usePathname();
  return (
    <VStack pb={8} spacing={8}>
      <Divider />
      <SimpleGrid columns={{ base: 1, md: 3 }} w="full">
        <VStack alignItems="flex-start">
          {firstColumnLinks.map(({ href, label }) => (
            <Link
              href={href}
              key={href}
              color={pathname === href ? "pink.400" : "gray.500"}
            >
              {label}
            </Link>
          ))}
        </VStack>
        <VStack>
          <Link href="#">Twitter</Link>
          <Link href="#">Github</Link>
          <Link href="#">Youtube</Link>
          <Link href="#">Email</Link>
        </VStack>
        <VStack>
          <Link href="/use">Use</Link>
          <Link href="/analytic">Analytic</Link>
        </VStack>
      </SimpleGrid>
      ;
    </VStack>
  );
};

export default Footer;
