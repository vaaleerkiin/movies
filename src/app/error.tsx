"use client";

import { Center, Heading } from "@chakra-ui/react";

export default function Error({ error }: { error: Error }) {
  return (
    <Center w="100%" h="100%">
      <Heading as="h1" size="lg" color="#f4a259">
        {error.message}
      </Heading>
    </Center>
  );
}
