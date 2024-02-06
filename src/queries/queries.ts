import { gql } from "../__generated__";

const GET_PAST_LAUNCHES = gql(`
  query pastlaunchesList($limit: Int) {
  launchesPast(limit: $limit) {
    id
    mission_name
    links {
      flickr_images
      mission_patch_small
    }
    rocket {
      rocket_name
    }
    launch_date_utc
  }
}
`);

const GET_LAUNCH_DETAILS = gql(`
    query launchDetails($id: ID!) {
    launch(id: $id) {
        id
        mission_name
        details
        links {
        flickr_images
        mission_patch
        }
    }
    }
`);

export { GET_PAST_LAUNCHES, GET_LAUNCH_DETAILS };
