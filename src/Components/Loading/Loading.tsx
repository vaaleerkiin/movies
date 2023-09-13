import { Spinner, Center } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Center w="100%" p="50px">
      <Spinner thickness="4px" color="#f4a259" size="xl" />
    </Center>
  );
};
