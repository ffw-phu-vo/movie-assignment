import type { Metadata } from "next";
import MovieList from "@/components/MovieList/MovieList";
import Hero from "@/components/Hero/Hero";

export const metadata: Metadata = {
  title: "Movie Friends",
  description: "Homepage Movie Friends",
};

const Home = async () => {
  return (
    <>
      <Hero title="Movie Friends" />
      <MovieList title="Engaging List" query="now_playing" />
    </>
  );
};

export default Home;
