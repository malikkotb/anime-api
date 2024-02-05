import React from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  if (loading) {
    return <p>Loading....</p>;
  }
  return <div className="App">
    
    {data?.rockets?.map((rocket: any) => (
      <div key={rocket.id}>{rocket.name}</div>
    ))}
    
  </div>;
}

export default App;
