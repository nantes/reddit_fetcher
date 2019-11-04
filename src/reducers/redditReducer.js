import {types} from '../actions/types.js';
import selectorSortReddit from '../selectors/sortSelector';

const initialState = {
  reddit: [],
  isLoading: false,
  sortValue: 'new',
  error: false,
};

export default function fetchRedditReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_REDDIT:
      return {...state, isLoading: true};
    case types.FETCH_REDDIT_SUCCESS:
      return {...state, reddit: action.reddit, isLoading: false};
    case types.FETCH_REDDIT_ERROR:
      return {...state, error: action.error, isLoading: false};
    case types.SORT_REDDIT:
      const sortedReddit = selectorSortReddit(state.reddit, action.sortValue);
      return {
        ...state,
        sortValue: action.sortValue,
        reddit: [...sortedReddit],
      };
    default:
      return {...state};
  }
}
