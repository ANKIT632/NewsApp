import axios from 'axios';
import apiKey from './GetApiData'
export  const fetchNewsRequest=()=>{
   return {type:'FETCH_NEWS_REQUEST'};

};

export const fetchNewsSuccess = (articles, totalResults) => {
    return {
      type: 'FETCH_NEWS_SUCCESS',
      payload: { articles, totalResults },
    };
  };

  export const fetchNews = (country,category,page,pageSize) => {
    return async (dispatch) => {
      dispatch(fetchNewsRequest());
  
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
  
      try {
        const data = await axios(url);
        dispatch(fetchNewsSuccess(data.articles, data.totalResults));
      } catch (error) {
        console.log(error);
      }
    };
  };