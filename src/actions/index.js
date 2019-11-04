import {types} from './types';
import axios from 'axios';

//TODO Move to env
const apiUrl = 'https://api.reddit.com/r/pics/new.json';

export const fetchReddit = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(response => {
        dispatch(fetchRedditSuccess(response.data.data.children));
      })
      .catch(error => {
        dispatch(fetchRedditError(error));
      });
  };
};

export const fetchRedditSuccess = reddit => ({
  type: types.FETCH_REDDIT_SUCCESS,
  reddit,
});

export const fetchRedditError = error => ({
  type: types.FETCH_REDDIT_ERROR,
  error,
});

export const sortReddit = sortValue => ({
  type: types.SORT_REDDIT,
  sortValue,
})