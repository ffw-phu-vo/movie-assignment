import type { Metadata } from "next";
import Hero from "./components/Hero/Hero";

export const metadata: Metadata = {
  title: "Movie Friends",
  description: "Homepage Movie Friends",
};

export default function Home() {
  return (
    <>
      <Hero title="Movie Friends" />
    </>
  );
}
