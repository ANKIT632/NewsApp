import React, { useState, useEffect, useRef } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, clearPre } from '../actions/action';

const News = (props) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const totalResults = useSelector((state) => state.totalResults);
  const [page, setPage] = useState(1);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // remove the duplicacy problem at first call two time 1 page. 
  const isMounted = useRef(false);
  const updateNews = async () => {
    props.setProgress(10);
    dispatch(fetchNews(props.country, props.category, page, props.pageSize));
    props.setProgress(30);
    props.setProgress(70);
    props.setProgress(100);
  };

  useEffect(() => {
    const c =dispatch(clearPre());
     console.log("call " +c)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Update when the page changes

  useEffect(() => {

    if (isMounted.current) {
      console.log(page);
      updateNews();
    } else {
      isMounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <>
      <h3 className="text-center heading" >
        NewsLite: Top {capitalizeFirstLetter(props.category)} Headlines
      </h3>

      <InfiniteScroll
        dataLength={articles.length}
        next={() => setPage(page + 1)} // Increment the page
        hasMore={articles.length < totalResults} // Check if there's more data to load
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ''}
                  des={element.description ? element.description : element.title.slice(0, 100)}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;