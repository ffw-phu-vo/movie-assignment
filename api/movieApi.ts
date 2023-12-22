import { notFound } from "next/navigation";
import { IMovieList, IMovieGetList, IMovieDetail } from "./movieApi.interface";
import camelcaseKeys from "camelcase-keys";

const MOVIE_ENDPOINT = process.env.NEXT_PUBLIC_MOVIE_ENDPOINT;
const MOVIE_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MOVIE_ACCESS_TOKEN;

const movieApi = {
  getList: async ({ query, page }: IMovieGetList): Promise<IMovieList> => {
    const res = await fetch(`${MOVIE_ENDPOINT}/movie/${query}?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return camelcaseKeys(await res.json(), { deep: true });
  },

  getDetail: async (mid: string): Promise<IMovieDetail> => {
    const res = await fetch(`${MOVIE_ENDPOINT}/movie/${mid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}`,
      },
    });

    if (!res.ok) {
      if (res.status === 404) {
        return notFound();
      }
      throw new Error("Failed to fetch data");
    }

    return camelcaseKeys(await res.json(), { deep: true });
  },
};

export default movieApi;
