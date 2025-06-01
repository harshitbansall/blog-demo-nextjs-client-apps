"use client";
import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import type { Beer } from "@/lib/types";

const HomePageContext = createContext<{
  data?: Beer[];
  error: Error | null;
  isLoading?: boolean;
}>({ error: null });

export const HomePageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, error, isLoading } = useQuery<Beer[]>({
    queryKey: ["beers"],
    queryFn: () =>
      fetch("https://api.sampleapis.com/beers/ale").then((res) =>
        res.json().then((data) => data.slice(0, 20))
      ),
  });

  return (
    <HomePageContext value={{ data, error, isLoading }}>
      {children}
    </HomePageContext>
  );
};

const useHomePageData = () => {
  const context = useContext(HomePageContext);
  if (!context) {
    throw new Error("useHomePageData must be used within an HomePageProvider");
  }
  return context;
};

export const BeerTableRows = () => {
  const { data, error, isLoading } = useHomePageData();

  if (isLoading)
    return (
      <tr>
        <td colSpan={4} className="py-10 text-center">
          Loading...
        </td>
      </tr>
    );
  if (error)
    return (
      <tr>
        <td colSpan={4} className="py-10 text-center">
          <span className="text-lg text-red-500">
            Error in fetching recent sales
          </span>
        </td>
      </tr>
    );
  return (
    <>
      {data?.map((beer) => (
        <tr key={beer.id} className="text-lg border-b border-primary/[0.3]">
          <td className="px-5">
            <img alt={beer.name} src={beer.image} className="w-15 mb-5" />
          </td>
          <td className="px-5">{beer.name}</td>
          <td className="px-5">{beer.price}</td>
          <td className="px-5">{beer.rating.average.toFixed(2)}</td>
        </tr>
      ))}
    </>
  );
};
