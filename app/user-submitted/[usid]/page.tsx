"use client";

import MovieDetail from "@/components/MovieDetail/MovieDetail";
import { RootState } from "@/store/store";
import { notFound } from "next/navigation";
import { useSelector } from "react-redux";

export default async function Page({ params }: { params: { usid: string } }) {
  const { usid } = params;

  const userSubmitted = useSelector((state: RootState) => state.userSubmitted);

  const detail: any = userSubmitted.UserSubmitteds.find(
    (item: any) => item.id === usid
  );

  if (detail === null) {
    return notFound();
  }

  return <MovieDetail {...detail} />;

  return <div>this is detail</div>;
}
