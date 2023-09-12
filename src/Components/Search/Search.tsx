"use client";
import { useState, useEffect } from "react";

import { IMvoies } from "@/Types/IMovies";
import {
  Input,
  IconButton,
  Container,
  Wrap,
  WrapItem,
  Link,
  Center,
  Img,
} from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [data, setData] = useState<IMvoies[]>([]);

  useEffect(() => {
    handlerSubmit();
    console.log(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async (): Promise<{ results: IMvoies[] }> => {
    const response = await fetch(
      `http://localhost:3000/api/movies?search=${search}`
    );
    return response.json();
  };

  const handlerSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!search || search === "") return;
    const { results } = await getData();
    setData(results);
  };

  const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);

    e.target.value === ""
      ? params.delete("search")
      : params.set("search", e.target.value);
    router.push(pathname + "?" + params.toString());
  };

  return (
    <>
      <Container position="relative" paddingTop={2}>
        <form onSubmit={handlerSubmit}>
          <Input
            placeholder="Search movies"
            variant="flushed"
            size="md"
            maxW={500}
            textAlign="center"
            color="white"
            defaultValue={search || ""}
            _focus={{ borderBottom: "2px solid #ffffff", outline: "none" }}
            onChange={handlerSearch}
          />
          <IconButton
            aria-label="Search"
            position="absolute"
            right="10px"
            type="submit"
            icon={<AiOutlineSearch />}
          />
        </form>
      </Container>
      <Wrap justify="center" padding={3} paddingTop={2} paddingBottom={2}>
        {data.map((el) => (
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
    </>
  );
};
