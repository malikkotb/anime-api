import React from "react";
import Card from "./Card";
import { Flex } from "antd"

export default function Grid() {
  return (
    <div style={{padding: "16px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "16px"}}>
        
      {/* {data?.rockets?.map((rocket: any) => (
        <div key={rocket.id}>{rocket.name}</div>
      ))} */}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
