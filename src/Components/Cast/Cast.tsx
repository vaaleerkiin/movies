import { ICast } from "@/Types/ICast";
import { Box, Container, Flex, Heading, Img, Text } from "@chakra-ui/react";

import React from "react";

export const Cast = ({ cast }: { cast: ICast[] }) => {
  return (
    <>
      {cast.length > 0 && (
        <Container
          marginTop={3}
          maxW="4xl"
          backgroundColor="#f4a259"
          borderRadius={8}
        >
          <Heading
            as="h1"
            size="lg"
            noOfLines={1}
            textAlign="center"
            borderBottom="1px solid black"
          >
            Cast
          </Heading>
          <Flex
            gap={6}
            overflowX="auto"
            scrollSnapType="x mandatory"
            sx={{
              "&::-webkit-scrollbar": {
                width: "8px",
                height: "8px",
              },
              "&::-webkit-scrollbar-track": { background: "transparen" },
              "&::-webkit-scrollbar-thumb": {
                background: "#363030",

                borderRadius: "24px",
              },
            }}
          >
            {cast.map((el: ICast) => {
              return (
                <Box
                  maxW={200}
                  key={el.id}
                  scrollSnapAlign="center"
                  marginBottom={2}
                >
                  <Img
                    objectFit="contain"
                    src={
                      el.profile_path
                        ? `https://image.tmdb.org/t/p/w200/${el.profile_path}?api_key=b3b4716df5187d0bc9138efc2668bc10`
                        : `https://gdr.one/simg/200x300/363030/fff?text=Not%20found`
                    }
                    alt={el.name}
                    minW={132}
                    maxW={132}
                  />
                  <Text noOfLines={1} as="b">
                    {el.name}
                  </Text>
                  <Text noOfLines={1}>
                    <Text as="b">Role:</Text> {el.character}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </Container>
      )}
    </>
  );
};
