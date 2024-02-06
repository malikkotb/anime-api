import { useQuery } from "@apollo/client";
import { useLocation, useParams } from "react-router-dom";
import { GET_ANIME_DETAILS } from "../queries/queries";
import {
  AnimeDetailsQuery,
  AnimeDetailsQueryVariables,
} from "../__generated__/graphql";
import { Spin } from "antd";
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  },
];
export default function Details() {
  const location = useLocation();
  const { id } = location.state as { id: string }; // Typecasting the state to access the ID
  const { slug } = useParams();

  // fetch anime details
  const { loading, data } = useQuery<
    AnimeDetailsQuery,
    AnimeDetailsQueryVariables
  >(GET_ANIME_DETAILS, {
    variables: { id: Number(id) },
    notifyOnNetworkStatusChange: true,
  });
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "100px",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  const title =
    data?.Page?.media?.[0]?.title?.english ??
    data?.Page?.media?.[0]?.title?.native;
  const description = data?.Page?.media?.[0]?.description?.replace(
    /<\/b><br>|<br>|<b>/g,
    ""
  );
  const coverImageExtraLarge = data?.Page?.media?.[0]?.coverImage?.extraLarge;
  const duration = data?.Page?.media?.[0]?.duration;
  const averageScore = data?.Page?.media?.[0]?.averageScore;
  const seasonYear = data?.Page?.media?.[0]?.seasonYear;
  const episodes = data?.Page?.media?.[0]?.episodes;
  const studios = data?.Page?.media?.[0]?.studios?.nodes
    ?.map((studio) => studio?.name)
    .join(", ");

  return (
    <div className="m-20 mt-8">
      <h1 className="text-2xl p-4 pt-0 font-medium text-center">{title}</h1>
      <div className="flex justify-center p-4">
        <img
          style={{ height: "350px" }}
          alt={"coverImage"}
          src={coverImageExtraLarge || ""}
        />
      </div>
      <p className="mx-20 text-justify text-lg">{description}</p>
      <div className="mx-20 mt-8 flex flex-col gap-3">
        <p className="font-medium text-lg">Details</p>
        <p className="">Episode Duration: {duration} minutes</p>
        <p>Episodes (if completed): {episodes}</p>
        <p>Studios: {studios}</p>
        <p>Average user score: {averageScore}/100</p>
        <p>First season aired: {seasonYear}</p>

      </div>
    </div>
  );
}
