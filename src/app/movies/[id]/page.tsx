import { getCast, getMovie, getReviews } from "@/app/api/api";
import { BackButton } from "@/Components/BackButton/BackButton";
import { Cast } from "@/Components/Cast/Cast";
import { Reviews } from "@/Components/Reviews/Reviews";
import { IMvoies } from "@/Types/IMovies";
import { Container, Heading, HStack, Img, Stack, Text } from "@chakra-ui/react";
import dateFormat from "dateformat";
import millify from "millify";
import type { Metadata } from "next";
import s from "./page.module.css";

const HOST = process.env.HOST;

export const revalidate = 60;

export async function generateStaticParams() {
  const response = await fetch(`${HOST}/api/new`);
  const { results: movies }: { results: IMvoies[] } = await response.json();
  return movies.map(({ id }) => ({
    slug: id.toString(),
  }));
}

export const generateMetadata = async ({
  params: { id },
}: Props): Promise<Metadata> => {
  const results = await getMovie(id);

  return {
    title: results.title,
    description: results.title,
  };
};

type Props = {
  params: {
    id: string;
  };
};

export default async function MoviesById({ params: { id } }: Props) {
  const [results, cast, reviews] = await Promise.all([
    getMovie(id),
    getCast(id).then((res) => res.cast),
    getReviews(id).then((res) => res.results),
  ]);

  return (
    <div style={{ padding: "0 16px" }}>
      <Container
        marginTop={3}
        maxW="4xl"
        backgroundColor="#f4a259"
        borderRadius={8}
      >
        <BackButton />
        <HStack
          className={s.moviesItems}
          spacing="30px"
          justify="center"
          paddingBottom={3}
          paddingTop={3}
          borderTop="1px solid black"
        >
          <Img
            minW={160}
            maxW={230}
            src={
              results.poster_path
                ? `https://image.tmdb.org/t/p/w300/${results.poster_path}?api_key=b3b4716df5187d0bc9138efc2668bc10`
                : `https://gdr.one/simg/200x300/363030/fff?text=Not%20found`
            }
          />

          <Stack spacing={1}>
            <Heading as="h1" size="lg" noOfLines={1}>
              {results.original_title}
            </Heading>
            <Text fontSize="md">
              User score: {Math.round(results.vote_average * 10)}%
            </Text>
            <Heading as="h1" size="md" noOfLines={1}>
              Release date
            </Heading>
            <Text fontSize="lg">
              {dateFormat(results.release_date, " mmmm dS, yyyy")}
            </Text>
            {results.genres?.[0] && (
              <>
                <Heading as="h1" size="md" noOfLines={1}>
                  Genres
                </Heading>{" "}
                <Text fontSize="lg">
                  {results.genres.map((el) => el.name).join(", ")}
                </Text>
              </>
            )}
            {results.budget && (
              <>
                <Heading as="h1" size="md" noOfLines={1}>
                  Budget
                </Heading>
                <Text fontSize="lg">
                  $
                  {millify(results.budget, {
                    precision: 3,
                    lowercase: true,
                  })}
                </Text>
              </>
            )}
            {results.status && (
              <>
                <Heading as="h1" size="md" noOfLines={1}>
                  Status
                </Heading>
                <Text fontSize="lg">{results.status}</Text>
              </>
            )}
          </Stack>
        </HStack>
        <Stack paddingBottom={3}>
          <Heading as="h1" size="md" noOfLines={1} textAlign="center">
            Overview
          </Heading>
          <Text fontSize="lg">{results.overview}</Text>
        </Stack>
      </Container>
      <Cast cast={cast} /> <Reviews reviews={reviews} />
    </div>
  );
}
