import React from "react";
import CardItem from "./Card";
import { useQuery } from "@apollo/client";
import { GET_ANIME_LIST } from "../queries/queries";
import { AnimeListQuery } from "../__generated__/graphql";

export default function Grid() {
  const { loading, data } = useQuery<AnimeListQuery>(GET_ANIME_LIST);
  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: "16px",
      }}
    >
      {data?.Page?.media?.filter(Boolean).map((anime) => 
        <CardItem key={anime?.id} anime={anime} />
      )}
    </div>
  );
}
