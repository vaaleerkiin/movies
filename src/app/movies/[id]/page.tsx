// import { BackButton } from "@/Components/BackButton/BackButton";
// import { IMvoies } from "@/Types/IMovies";
// import {
//   Container,
//   Img,
//   Stack,
//   Heading,
//   Text,
//   Wrap,
//   WrapItem,
// } from "@chakra-ui/react";
// import dateFormat from "dateformat";

// type Props = {
//   params: {
//     id: string;
//   };
// };

// export default async function MoviesById({ params: { id } }: Props) {
//   const getData = async (): Promise<IMvoies> => {
//     const HOST = process.env.HOST;
//     const response = await fetch(`${HOST}/api/movies/${id}`);
//     return response.json();
//   };

//   const results = await getData();
//   return (
//     <div style={{ padding: "0 16px" }}>
//       <Container
//         marginTop={3}
//         maxW="4xl"
//         backgroundColor="#f4a259"
//         borderRadius={8}
//       >
//         <BackButton />
//         <Wrap
//           spacing="30px"
//           justify="center"
//           paddingBottom={3}
//           paddingTop={3}
//           borderTop="1px solid black"
//         >
//           <WrapItem>
//             <Img
//               minW={160}
//               maxW={230}
//               src={
//                 results.poster_path
//                   ? `https://image.tmdb.org/t/p/w300/${results.poster_path}?api_key=b3b4716df5187d0bc9138efc2668bc10`
//                   : `https://gdr.one/simg/200x300/363030/fff?text=Not%20found`
//               }
//             />
//           </WrapItem>
//           <WrapItem>
//             <Stack spacing={1}>
//               <Heading as="h1" size="lg" noOfLines={1}>
//                 {results.original_title}
//               </Heading>
//               <Text fontSize="md">
//                 User score: {Math.round(results.vote_average * 10)}%
//               </Text>
//               <Heading as="h1" size="md" noOfLines={1}>
//                 Release date
//               </Heading>
//               <Text fontSize="lg">
//                 {dateFormat(results.release_date, " mmmm dS, yyyy")}
//               </Text>
//               {results.genres?.[0] && (
//                 <>
//                   <Heading as="h1" size="md" noOfLines={1}>
//                     Genres
//                   </Heading>{" "}
//                   <Text fontSize="lg">
//                     {results.genres.map((el) => el.name).join(", ")}
//                   </Text>
//                 </>
//               )}
//             </Stack>
//           </WrapItem>
//         </Wrap>
//         <Stack paddingBottom={3}>
//           <Heading as="h1" size="md" noOfLines={1} textAlign="center">
//             Overview
//           </Heading>
//           <Text fontSize="lg">{results.overview}</Text>
//         </Stack>
//       </Container>
//     </div>
//   );
// }

export default function foo() {
  return <></>;
}
