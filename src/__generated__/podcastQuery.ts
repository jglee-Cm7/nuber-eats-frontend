/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PodcastSearchInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: podcastQuery
// ====================================================

export interface podcastQuery_getPodcast_podcast_episodes {
  __typename: "Episode";
  title: string;
  category: string;
  createdAt: any;
}

export interface podcastQuery_getPodcast_podcast {
  __typename: "Podcast";
  title: string;
  category: string;
  rating: number;
  episodes: podcastQuery_getPodcast_podcast_episodes[];
}

export interface podcastQuery_getPodcast {
  __typename: "PodcastOutput";
  ok: boolean;
  error: string | null;
  podcast: podcastQuery_getPodcast_podcast | null;
}

export interface podcastQuery {
  getPodcast: podcastQuery_getPodcast;
}

export interface podcastQueryVariables {
  podcastInput: PodcastSearchInput;
}
