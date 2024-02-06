import React from "react";
import { Card } from "antd";
// import { Media } from "../__generated__/graphql";

const { Meta } = Card;
export type Media = {
  __typename?: "Media";
  id: number;
  description?: string | null;
  averageScore?: number | null;
  seasonYear?: number | null;
  episodes?: number | null;
  title?: {
    __typename?: "MediaTitle";
    english?: string | null;
    native?: string | null;
  } | null;
  coverImage?: {
    __typename?: "MediaCoverImage";
    extraLarge?: string | null;
  } | null;
  studios?: {
    __typename?: "StudioConnection";
    nodes?: Array<{ __typename?: "Studio"; name: string } | null> | null;
  } | null;
} | null;

interface CardItemProps {
  anime: Media; // Use the Media type for the anime prop
}
// const CardItem: React.FC<CardItemProps> = ({ anime }) => {
  export default function CardItem({ anime }: CardItemProps) {
  return (
    <Card
      style={{ width: 250, maxWidth: "100%" }}
      cover={
        <img
          style={{height: "300px"}}
          alt={"coverImage"}
          src={anime?.coverImage?.extraLarge || ""}
        />
      }
    >
      <Meta
        title={anime?.title?.english ?? anime?.title?.native}
        description={anime?.seasonYear}
      />
    </Card>
  );
};
