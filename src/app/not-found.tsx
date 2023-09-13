import { Center, Heading, Link, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
export default function Custom404() {
  return (
    <Center marginTop={40}>
      <Stack align="center">
        <Heading textAlign="center" as="h1" size="lg" color="#f4a259">
          This page could not be found.
        </Heading>

        <Link size="lg" color="#f4a259" fontWeight={500} as={NextLink} href="/">
          Return Home
        </Link>
      </Stack>
    </Center>
  );
}
