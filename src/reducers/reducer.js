// reducers/newsReducer.js

const initialState = {
  articles: [],
  totalResults: 0,
  loading: false,
  category: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_REQUEST':
      return { ...state, loading: true };

    case 'FETCH_NEWS_SUCCESS':
      if (state.category === action.payload.category) {
        return {
          ...state,
          articles: [...state.articles, ...action.payload.articles],
          totalResults: action.payload.totalResults,
          loading: false,
        };
      } else {
        return {
          articles: action.payload.articles,
          totalResults: action.payload.totalResults,
          loading: false,
          category: action.payload.category,
        };
      }

    default:
      return state;
  }
};

export default newsReducer;
