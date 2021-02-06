import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from '../components/header';
import { Podcast } from '../pages/listener/podcast';
import { Podcasts } from '../pages/listener/podcasts';
import { meQuery } from '../__generated__/meQuery';

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
    }
  }
`;

export const LoggedInRouter = () => {
  const { data, loading, error } = useQuery<meQuery>(ME_QUERY);
  if (!data || loading || error) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <span className='font-medium text-xl tracking-wide'>Loading...</span>
      </div>
    );
  }
  return (
    <Router>
      <Header email={data.me.email} />
      <Switch>
        <Route key={1} path='/' exact>
          <Podcasts />
        </Route>
        ,
        <Route key={2} path='/:podcastId'>
          <Podcast />
        </Route>
        ,
      </Switch>
    </Router>
  );
};
