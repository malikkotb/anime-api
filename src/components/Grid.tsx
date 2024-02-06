import React from "react";
import CardItem from "./Card";
import { useQuery } from "@apollo/client";
import { GET_LAUNCH_DETAILS, GET_PAST_LAUNCHES } from "../queries/queries";
import { PastlaunchesListQuery, PastlaunchesListQueryVariables } from "../__generated__/graphql";

export default function Grid() {

  const { loading, data } = useQuery<PastlaunchesListQuery, PastlaunchesListQueryVariables>(GET_PAST_LAUNCHES, {
    variables: {limit: 30},
    notifyOnNetworkStatusChange: true,
  });
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
      {data?.launchesPast?.map((launch) => (
        <>
          <div key={launch?.id}>{launch?.mission_name}</div>
          <CardItem key={launch?.id} launch={launch}  />
        </>
      ))}
    </div>
  );
}
