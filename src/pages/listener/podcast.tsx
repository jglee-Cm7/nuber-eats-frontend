import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  podcastQuery,
  podcastQueryVariables,
} from '../../__generated__/podcastQuery';

const PODCAST_QUERY = gql`
  query podcastQuery($podcastInput: PodcastSearchInput!) {
    getPodcast(input: $podcastInput) {
      ok
      error
      podcast {
        title
        category
        rating
        episodes {
          title
          category
          createdAt
        }
      }
    }
  }
`;

interface IPodcastParam {
  podcastId: string;
}

export const Podcast = () => {
  const params = useParams<IPodcastParam>();

  const { data, loading } = useQuery<podcastQuery, podcastQueryVariables>(
    PODCAST_QUERY,
    {
      variables: {
        podcastInput: {
          id: +params.podcastId,
        },
      },
    }
  );

  return (
    <div className='max-w-screen-2xl mx-auto mt-10'>
      {!loading && (
        <div className='lg:mx-64 sm:mx-42 mx-6 flex flex-col '>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-col place-items-start'>
              <h1 className='font-medium text-2xl'>
                {data?.getPodcast.podcast?.title}
              </h1>
              <span className='mt-2 font-normal text-gray-500 text-xs'>
                {data?.getPodcast.podcast?.category}
              </span>
              <button className='mt-3 py-1 px-3 ring-1 rounded-2xl text-sm'>
                + 구독
              </button>
            </div>
            <div className='px-5 py-4 mx-6 ring-2 rounded-xl text-2xl'>
              <h4>{data?.getPodcast.podcast?.rating} / 5</h4>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='mt-20'>
              <h2 className='mb-7 text-lg font-medium'>감상가능한 에피소드</h2>
              {data?.getPodcast.podcast?.episodes.length !== 0 ? (
                data?.getPodcast.podcast?.episodes.map((episode) => {
                  return (
                    <div className='flex flex-col'>
                      <span className='text-sm font-light text-gray-400'>
                        {episode.createdAt.split('T')[0]}
                      </span>
                      <h2 className='mt-1 text-sm font-semibold'>
                        {episode.title}
                      </h2>
                      <span className='mt-1 text-sm font-light text-gray-800'>
                        {episode.category}
                      </span>
                      <div className='border my-6'></div>
                    </div>
                  );
                })
              ) : (
                <span>에피소드가 없습니다.</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
