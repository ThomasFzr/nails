import type { Route } from "./+types/home";
import { Carousel } from "~/components/carousel";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
    <div className="w-full flex justify-center">
      <Carousel />
    </div>
  </>;
}
