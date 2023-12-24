import type { Metadata } from "next";
import { Providers } from "./providers";
import { Container, VStack } from "@chakra-ui/react";
import { Navbar, Footer } from "./components";

export const metadata: Metadata = {
  title: {
    default: "Kamil Ertekin",
    template: "%s | Kamil Ertekin",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Container maxW="container.md">
            <VStack spacing={0} alignItems="stretch">
              <Navbar />
              {children}
              <Footer />
            </VStack>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
