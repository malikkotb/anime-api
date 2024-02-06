import React from "react";
import { Card } from "antd";
import { useNavigate } from 'react-router-dom';

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
export default function CardItem({ anime }: CardItemProps) {

  const navigate = useNavigate();

  // Function to generate a slug from the anime title
  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  };

  const handleCardClick = () => {
    const title = anime?.title?.english ?? anime?.title?.native;
    const id = anime?.id; // Assuming there's an ID field in your anime object
    if (title && id) {
      let slug = generateSlug(title);
      if (slug === "") { // no english title
        slug = id.toString();
      }
      navigate(`/anime/${slug}`, { state: { id } }); // Pass the ID in the state
    }
  };

  return (
    <Card
      style={{ width: 250, maxWidth: "100%", cursor: "pointer" }}
      cover={
        <img
          style={{ height: "300px" }}
          alt={"coverImage"}
          src={anime?.coverImage?.extraLarge || ""}
        />
      }
      onClick={handleCardClick}
    >
      <Meta
        title={anime?.title?.english ?? anime?.title?.native}
        description={anime?.seasonYear}
      />
    </Card>
  );
}
