import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';
import { LOCALSTORAGE_TOKEN } from './constants';

const token = localStorage.getItem(LOCALSTORAGE_TOKEN);
// react variables.
export const isLoggedInVar = makeVar(Boolean(token)); // false
export const authToken = makeVar(token); // null

export const client = new ApolloClient({
  uri: 'https://assignment-sandbox.herokuapp.com/graphql',
  cache: new InMemoryCache({
    typePolicies: { // local state
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            }
          },
          token: {
            read() {
              return authToken();
            }
          }
        }
      }
    }
  })
});