import { Navigation } from "@/Components/Navigation/Navigation";
import { Providers } from "./providers";
import { Container } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#363030" }}>
        <header style={{ padding: "0px 24px" }}>
          <Container
            maxW="2xl"
            minH={68}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={24}
            backgroundColor="#f4a259"
            borderBottomRightRadius={8}
            borderBottomLeftRadius={8}
          >
            <Navigation />
          </Container>
        </header>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
