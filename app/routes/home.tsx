import type { Route } from "./+types/home";
import { Carousel } from "~/components/carousel";
import { Grid } from "~/components/grid";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
    <div className="w-full flex flex-col justify-center mt-16">
      <h1 className="hidden">Ongles Lyon Gel X Aesthetic</h1>
      <Grid />
      {/* <Carousel /> */}
    </div>
  </>;
}
