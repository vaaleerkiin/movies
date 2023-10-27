import { ICast } from "@/Types/ICast";
import { IMvoies } from "@/Types/IMovies";
import { IReviews } from "@/Types/IReviews";
const HOST = process.env.HOST;

export const getData = async (): Promise<{ results: IMvoies[] }> => {
  const response = await fetch(`${HOST}/api/new`, {
    next: { revalidate: 1 },
  });
  console.log(Date());

  return await response.json();
};

export const getMovie = async (id: string): Promise<IMvoies> => {
  const response = await fetch(`${HOST}/api/movies/${id}`);
  return await response.json();
};

export const getCast = async (id: string): Promise<{ cast: ICast[] }> => {
  const response = await fetch(`${HOST}/api/movies/${id}/cast`);
  return await response.json();
};

export const getReviews = async (
  id: string
): Promise<{ results: IReviews[] }> => {
  const response = await fetch(`${HOST}/api/movies/${id}/reviews`);
  return await response.json();
};
