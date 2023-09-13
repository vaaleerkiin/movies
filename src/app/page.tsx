import { IMvoies } from "@/Types/IMovies";
import { Center, Wrap, WrapItem, Img } from "@chakra-ui/react";
import Link from "next/link";
import { getData } from "./api/api";

export default async function Home() {
  const { results } = await getData();

  return (
    <Wrap justify="center" padding={3} paddingTop={2} paddingBottom={2}>
      {results.map((el) => (
        <WrapItem
          key={el.id}
          borderRadius={8}
          overflow="hidden"
          transition="transform  ease-in-out 200ms"
          _hover={{ transform: "scale(1.02)" }}
        >
          <Link href={`/movies/${el.id}`}>
            <Center w={300} h={450} bg="red.200">
              <Img
                src={
                  el.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${el.poster_path}?api_key=b3b4716df5187d0bc9138efc2668bc10`
                    : `https://gdr.one/simg/200x300/363030/fff?text=Not%20found`
                }
              />
            </Center>
          </Link>
        </WrapItem>
      ))}
    </Wrap>
  );
}
