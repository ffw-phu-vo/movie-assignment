import { userSubmittedApi } from "@/api/userSubmittedApi";
import MovieDetail from "@/components/MovieDetail/MovieDetail";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { usid: string };
}) {
  const { usid } = params;
  const detail = await userSubmittedApi.getUserSubmittedById(usid);
  if (!detail) {
    return notFound();
  }
  return {
    title: detail.originalTitle,
    description: detail.overview,
  };
}

export default async function Page({ params }: { params: { usid: string } }) {
  const { usid } = params;
  const detail = await userSubmittedApi.getUserSubmittedById(usid);
  if (!detail) {
    return notFound();
  }

  return <MovieDetail {...detail} />;
}
