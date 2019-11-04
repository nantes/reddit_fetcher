import {types} from '../actions/types.js';
import selectorSortReddit from '../selectors/sortSelector';

const initialState = {
  reddit: [],
  sortedReddit: [],
  isLoading: false,
  sortValue: 'new',
  error: false,
  urlItem: null,
};

export default function fetchRedditReducer(state = initialState, action) {
  console.log('action ', action);
  switch (action.type) {
    case types.FETCH_REDDIT:
      return {...state, isLoading: true};
    case types.FETCH_REDDIT_SUCCESS:
      return {
        ...state,
        reddit: [...action.reddit],
        sortedReddit: [...action.reddit],
        isLoading: false,
      };
    case types.FETCH_REDDIT_ERROR:
      return {...state, error: action.error, isLoading: false};
    case types.SORT_REDDIT:
      const sortedReddit = selectorSortReddit(state.reddit, action.sortValue);
      return {
        ...state,
        sortValue: action.sortValue,
        sortedReddit: [...sortedReddit],
      };
    case types.OPEN_ITEM:
      return {
        ...state,
        urlItem: action.urlItem,
      };
    default:
      return {...state};
  }
}
