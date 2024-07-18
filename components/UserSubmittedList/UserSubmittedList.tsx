"use client";
// import useInView from "@/hooks/useInView";
import React from "react";
import MovieListItem from "../MovieList/MovieListItem";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IMovieListItem } from "@/api/movieApi.interface";

export const UserSubmittedList = () => {
  // const container = useRef<HTMLDivElement | null>(null);
  // const { isInView } = useInView(container);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [resultData, setResultData] = useState<IMovieList>({
  //   results: [],
  //   totalResults: 0,
  //   totalPages: 0,
  // });

  const userSubmitted = useSelector((state: RootState) => state.userSubmitted);

  return (
    <div className="user-submitted-list py-12 lg:py-16">
      <h2 className="mb-10">{"User Submitted List"}</h2>
      <div className="grid gap-y-8 gap-x-6 lg:gap-y-12 lg:gap-x-8 grid-cols-2 lg:grid-cols-4">
        {userSubmitted?.UserSubmitteds?.map((item) => {
          const data: IMovieListItem = {
            id: item.id,
            title: item.originalTitle,
            posterPath: item.posterPath,
            type: "user-submitted",
          };
          return (
            <MovieListItem
              key={`user-submitted-list-load-more-item-${item.id}`}
              {...data}
            />
          );
        })}

        {/* {resultData.totalPages !== currentPage && (
          <div ref={container} className="h-20">
            <div className="absolute left-0 right-0 h-20 flex content-center justify-center text-xl font-bold">
              {"Loading..."}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};
