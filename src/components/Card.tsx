import React from "react";
import { Avatar, Card } from "antd";
import { Launch } from "../__generated__/graphql";

const { Meta } = Card;
export default function CardItem(launch: any) {

  return (
    <Card
      style={{ width: 300, maxWidth: "100%" }}
      cover={
        <img
          alt="example"
          src={launch.links?.mission_patch_small || ""}
        />
      }
    >
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title={launch.mission_name}
        description={launch.rocket?.rocket_name}
      />
    </Card>
  );
}

