
import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";
import { apiKey } from './GetApiData';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../actions/action';


const News = (props) => {


  const dispatch=useDispatch();
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const a=useSelector((state)=>state.articles);
  const b= useSelector((state)=>state.totalResults);
  const load= useSelector((state)=>state.loading);

   const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  
  const updateNews = async () => {
  
  props.setProgress(10);
    dispatch(fetchNews(props.country,props.category,page,props.pageSize))
    props.setProgress(30);

    
    props.setProgress(70);
  
    
   
    setArticles(a);
    setTotalResults(b);
    setLoading(load);
    props.setProgress(100);
};


  useEffect(() => {
    setPage(page + 1)
    document.title = `${capitalizeFirstLetter(props.category)} - NewsLite`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const ar=useSelector((state)=>state.articles)

    console.log("data = "+ar);




  return (

    <> 
      <h1 className='text-center' style={{ margin: "35px 0px", marginTop: '90px' }}>NewsLite : Top {capitalizeFirstLetter(props.category)} HeadLine</h1>
      {loading && <Spinner />}
      

      {/* <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      > */}
        {/* {loading && <Spinner />} */}
        <div className='container'>
          <div className='row'>
            {
              // if loading is true then not show anything.
              articles.map((element) => {
                // whenEver return in map use pass unique key in root tag, and similary pass in child tag unique
                return (<div className="col-md-4" key={element.url} >

                  {/* display fixed amount  */}

                  <NewsItem title={element.title ? element.title : ""} des={element.description ? element.description : element.title.slice(0,100)} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                </div>)
              })

            }
          </div>

        </div>
      {/* </InfiniteScroll> */}

    </>
  )
}



News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;

// Note page means Total number of page and pageSize means total number of item display per page.
// InfiniteScroll : take four arguments
// datalength (define the length of data), next:(take function for next data),hasMore :(take condition),loading:(what show during loading). 
  


// const fetchMoreData = async () => {

//   setPage(page + 1)

//   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;

//   let data = await fetch(url);
//   let parsedData = await data.json();
//   // concat previous articles with new fetch articles
//   setArticles(articles.concat(parsedData.articles))
//   setTotalResults(parsedData.totalResults)

// };