import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { podcastsQuery } from '../../__generated__/podcastsQuery';

const PODCASTS_QUERY = gql`
  query podcastsQuery {
    getAllPodcasts {
      ok
      error
      podcasts {
        id
        title
        category
        rating
      }
    }
  }
`;

export const Podcasts = () => {
  const { data, loading, error } = useQuery<podcastsQuery>(PODCASTS_QUERY);

  return (
    <div className='max-w-screen-2xl mx-auto mt-10'>
      {!loading && (
        <div className='lg:mx-64 sm:mx-32 mx-6 grid grid-cols-3 gap-x-5 gap-y-12'>
          {data?.getAllPodcasts.podcasts?.map((podcast) => (
            <div className='flex flex-col justify-between border-2 border-gray-200 duration-50 shadow-xl hover:shadow-2xl rounded-lg'>
              <div className='flex flex-row justify-between items-center'>
                <div className='px-3 py-3 flex flex-col justify-center'>
                  <Link to={`/${podcast.id}`}>
                    <h3 className='font-medium text-sm'>{podcast.title}</h3>
                  </Link>
                  <span className='mt-1 font-normal text-gray-500 text-xs'>
                    {podcast.category}
                  </span>
                </div>
                <div className='px-3 py-3 flex justify-end items-center'>
                  <span>{podcast.rating}</span>
                </div>
              </div>
              <div className='flex flex-row justify-center items-center'>
                <div className='py-1 flex flex-auto border-r border-t-2 border-gray-200 justify-center items-center'>
                  <button className='font-normal text-sm'>구독하기</button>
                </div>
                <div className='py-1 flex flex-auto border-l border-t-2 border-gray-200 justify-center items-center'>
                  <button className='font-normal text-sm'>리뷰달기</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
