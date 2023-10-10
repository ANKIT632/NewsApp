
// reducers/newsReducer.js

const initialState = {
    articles: [],
    totalResults: 0,
    loading: false,
    page:0,
  };
  
  const newsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_NEWS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_NEWS_SUCCESS':
      
        return {
          ...state,
          articles: action.payload.articles,
          totalResults: action.payload.totalResults,
          page:action.payload.page,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default newsReducer;
  