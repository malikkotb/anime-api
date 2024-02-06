import { gql } from "../__generated__";

const GET_ANIME_LIST = gql(`
  query AnimeList {
    Page {
      media {
        id
        title {
          english
          native
        }
        description
        seasonYear
        coverImage {
          extraLarge
        }
      }
    }
}
`);

// for anime details by ID -> get studio, average rating / 100, episode duration in minutes
const GET_ANIME_DETAILS = gql(`
    query AnimeDetails($id: Int) {
      Page {
        media(id: $id) {
          id
          title {
            english
            native
          }
          description
          coverImage {
            extraLarge
          }
          duration
          averageScore
          seasonYear
          episodes
          studios {
            nodes {
              name
            }
          }
        }
      }
}
`);

export { GET_ANIME_LIST, GET_ANIME_DETAILS };
