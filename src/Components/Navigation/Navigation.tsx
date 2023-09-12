"use client";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  const isMoviesActive = pathname.includes("/movies");
  const isHomeActive = pathname === "/";

  return (
    <>
      <Link
        textShadow="rgba(0, 0, 0, 0.27) 2px 2px 4px"
        fontWeight={600}
        fontSize={24}
        as={NextLink}
        href="/"
        color={isHomeActive ? "white" : "black"}
      >
        Home
      </Link>
      <Link
        textShadow="rgba(0, 0, 0, 0.27) 2px 2px 4px"
        fontWeight={600}
        fontSize={24}
        as={NextLink}
        href="/movies"
        color={isMoviesActive ? "white" : "black"}
      >
        Movies
      </Link>
    </>
  );
};
