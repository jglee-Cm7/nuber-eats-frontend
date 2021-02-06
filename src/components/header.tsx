import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedInVar } from '../apollo';

interface IHearderProps {
  email: string;
}

export const Header: React.FC<IHearderProps> = ({ email }) => (
  <header className='py-2'>
    <div className='w-full px-5 flex flex-row justify-between items-center'>
      <div>
        <Link to='/'>
          <h2 className='text-lg font-medium'>PodCasts</h2>
        </Link>
      </div>
      <div className='px-9 flex w-full justify-center items-center '>
        <form className='w-full'>
          <input
            type='Search'
            className='py-2 px-9 w-full max-w-2xl bg-gray-100 focus:shadow-lg duration-200 focus:bg-opacity-0 focus:outline-none rounded-lg'
            placeholder='Search Podcast.'
          ></input>
        </form>
      </div>
      <div className='flex flex-row justify-end items-center'>
        <button
          onClick={() => {
            isLoggedInVar(false);
            localStorage.removeItem('token');
          }}
          className='w-16 mx-3'
        >
          Log Out
        </button>
        <h1>{email}</h1>
      </div>
    </div>
  </header>
);
