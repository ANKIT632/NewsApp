// reducers/newsReducer.js

const initialState = {
  articles: [],
  totalResults: 0,
  loading: false,
  category: null,
  page:1,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_REQUEST':
      return { ...state, loading: true };

      case 'clear':
        return{...state,articles:[],page:1}

    case 'FETCH_NEWS_SUCCESS':
     
        return {
          ...state,
          articles:[...state.articles, ...action.payload.articles],
          totalResults: action.payload.totalResults,
          loading: false,
          page:state.page+1,
        };
 

    default:
      return state;
  }
};

export default newsReducer;
