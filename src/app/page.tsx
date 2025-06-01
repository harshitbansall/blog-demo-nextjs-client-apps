import { HomePageProvider, BeerTableRows } from "@/components/pages/home";
import {
  DollarSignIcon,
  GlassWaterIcon,
  StarIcon,
  ImageIcon,
} from "lucide-react";

const Home = () => {
  return (
    <HomePageProvider>
      <h1 className="text-3xl font-bold mb-2">👋 Hello, world!</h1>
      <p>
        This is an example of a simple client-side application built with
        Next.js.
      </p>

      <p>
        It uses the{" "}
        <a
          href="https://www.npmjs.com/package/@tanstack/react-query"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          @tanstack/react-query
        </a>{" "}
        library to fetch data from an API and display it in a table.
      </p>

      <p>
        The data is fetched from{" "}
        <a
          href="https://api.sampleapis.com/beers/ale"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
        >
          https://api.sampleapis.com/beers/ale
        </a>
        .
      </p>

      <p className="mb-4">
        All this upper text will be a part of html file pre built by nextjs
        unlike vite applications.
      </p>

      <div className="border-primary/[0.3] overflow-hidden rounded-xl border">
        <div className="border-primary/[0.3] bg-accent/30 flex items-center justify-start gap-3 border-b p-4">
          <h2 className="text-2xl font-semibold">🍺 Sample Beers</h2>
        </div>
        <table className="w-full text-sm">
          <thead className="text-sm">
            <tr className="bg-secondary-background/[0.01] border-primary/[0.3] text-primary/60 border-b text-left [&>th]:font-normal">
              <th className="w-[20%] p-4 text-center">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Image
                </div>
              </th>
              <th className="w-[40%] p-4 text-center">
                <div className="flex items-center gap-2">
                  <GlassWaterIcon className="w-4 h-4" />
                  Name
                </div>
              </th>
              <th className="w-[20%] p-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <DollarSignIcon className="w-4 h-4" />
                  Price
                </div>
              </th>
              <th className="w-[20%] p-4">
                <div className="flex items-center gap-2">
                  <StarIcon className="w-4 h-4" />
                  Rating Average
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <BeerTableRows />
          </tbody>
        </table>
      </div>
    </HomePageProvider>
  );
};

export default Home;
