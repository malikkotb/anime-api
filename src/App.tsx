import React from "react";
import { useQuery, gql } from "@apollo/client";
import Grid from "./components/Grid";
import Header from "./components/Header";

const GET_LOCATIONS = gql`
  query ExampleQuery {
    rockets {
      id
      name
      mass {
        kg
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <div className="">
      <Header />
      <Grid />
    </div>
  );
}

export default App;
