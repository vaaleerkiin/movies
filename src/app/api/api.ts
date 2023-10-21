import { ICast } from "@/Types/ICast";
import { IMvoies } from "@/Types/IMovies";
import { IReviews } from "@/Types/IReviews";

export const getData = async (): Promise<{ results: IMvoies[] }> => {
  const HOST = process.env.HOST;
  const response = await fetch(`${HOST}/api/new`, {
    next: { revalidate: 3600 },
  });
  return response.json();
};

export const getMovie = async (id: string): Promise<IMvoies> => {
  const HOST = process.env.HOST;
  const response = await fetch(`${HOST}/api/movies/${id}`);
  return response.json();
};

export const getCast = async (id: string): Promise<{ cast: ICast[] }> => {
  const HOST = process.env.HOST;
  const response = await fetch(`${HOST}/api/movies/${id}/cast`);
  return response.json();
};

export const getReviews = async (
  id: string
): Promise<{ results: IReviews[] }> => {
  const HOST = process.env.HOST;
  const response = await fetch(`${HOST}/api/movies/${id}/reviews`);
  return response.json();
};
