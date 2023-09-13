"use client";
import { ICast } from "@/Types/ICast";
import { Container, Heading, Img, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Loading } from "../Loading/Loading";
import { getCast } from "@/app/api/api";

export const Cast = ({ id }: { id: string }) => {
  const [cast, setCast] = useState<ICast[]>([]);
  const [init, setInit] = useState(true);

  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 860px)" });
  const isLaptop = useMediaQuery({ query: "(max-width: 1200px)" });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)",
  });

  const currImgValues = () => {
    if (isMobile) {
      return { width: 80, height: 120, quantity: 3 };
    } else if (isTablet) {
      return { width: 80, height: 120 };
    } else if (isLaptop) {
      return { width: 140, height: 200 };
    } else if (isDesktop) {
      return { width: 200, height: 300 };
    } else {
      return { width: 140, height: 200 };
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getCast(id);
      setCast(data.cast);
      setInit(false);
    })();
  }, [id]);

  return (
    <div>
      {init && <Loading />}
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
          <Swiper
            modules={[Scrollbar, Autoplay]}
            spaceBetween={20}
            slidesPerView={currImgValues()?.quantity || 5}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
          >
            {cast?.map((el: ICast) => {
              return (
                <SwiperSlide key={el.id}>
                  <div>
                    <Img
                      //   aspectRatio="2/3"
                      objectFit="contain"
                      maxH="234px"
                      src={
                        el.profile_path
                          ? `https://image.tmdb.org/t/p/w200/${el.profile_path}?api_key=b3b4716df5187d0bc9138efc2668bc10`
                          : `https://gdr.one/simg/200x300/363030/fff?text=Not%20found`
                      }
                      alt={el.name}
                      width={currImgValues()?.width}
                      height={currImgValues()?.height}
                    />
                    <Text as="b">{el.name}</Text>
                    <Text noOfLines={2}>
                      <Text as="b">Role:</Text> {el.character}
                    </Text>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      )}
    </div>
  );
};
