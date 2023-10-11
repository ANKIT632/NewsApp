import axios from 'axios';
import {apiKey} from '../Components/GetApiData'

export  const fetchNewsRequest=()=>{
   return {type:'FETCH_NEWS_REQUEST'};

};

export const fetchNewsSuccess = (articles, totalResults,page,category) => {
    return {
      type: 'FETCH_NEWS_SUCCESS',
      payload: { articles, totalResults,page,category },
    };
  };

  export const fetchNews = (country,category,page,pageSize) => {
    return async (dispatch) => {
      dispatch(fetchNewsRequest());
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
  
      try {
        const response = await axios.get(url);
        console.log(response);
        dispatch(fetchNewsSuccess(response.data.articles, response.data.totalResults,page,category));
      } catch (error) {
        console.log(error);
      }
    };
  };

  