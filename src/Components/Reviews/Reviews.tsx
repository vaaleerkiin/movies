import { IReviews } from "@/Types/IReviews";
import dateFormat from "dateformat";

import { Container, Text, Box, Avatar, VStack } from "@chakra-ui/react";
import React from "react";

export const Reviews = ({ reviews }: { reviews: IReviews[] }) => {
  return (
    <>
      {reviews.length > 0 && (
        <Container
          marginTop={3}
          marginBottom={3}
          maxW="4xl"
          backgroundColor="#f4a259"
          borderRadius={8}
          paddingBottom={3}
        >
          <VStack gap={6} paddingTop={4}>
            {reviews.map((el, ind) => (
              <Box
                key={el.id}
                borderTop={`${ind === 0 ? "none" : "1px solid black"}`}
                paddingTop={`${ind === 0 ? 0 : 4}`}
              >
                <Box flex="1" textAlign="left">
                  <Avatar
                    marginRight={2}
                    size="xs"
                    src={
                      el.author_details.avatar_path
                        ? `https://image.tmdb.org/t/p/w300/${el.author_details.avatar_path}?api_key=b3b4716df5187d0bc9138efc2668bc10`
                        : `https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png`
                    }
                  />
                  <Text display="inline"> {el.author}</Text>{" "}
                  <Text display="inline" fontSize="xs" marginLeft="auto">
                    ({dateFormat(el.created_at, "mmmm dS, yyyy")})
                  </Text>
                </Box>

                <Text>{el.content}</Text>
              </Box>
            ))}
          </VStack>
        </Container>
      )}
    </>
  );
};
