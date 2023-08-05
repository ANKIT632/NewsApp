
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {


  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {

    // first call constructor then call componentDidMount.

    super();
    this.state = {
      // articles : this.articles,
      articles: [],
      loading: true,
      page: 1,
      totalResults :0
    }
    console.log(this.state);
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a31190680ad043ef938f39cd742fb8c6&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true })
    let data = await fetch(url);

    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
   
  
    })
    
  }

  async componentDidMount() {

    this.updateNews()

  }

 

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a31190680ad043ef938f39cd742fb8c6&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);

    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
      page:this.state.page+1
  
    })
  };

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsLite : Top HeadLine</h2>
        
        <InfiniteScroll
                 dataLength={this.state.articles.length}
                 next={this.fetchMoreData}
                 hasMore={this.state.articles.length !== this.state.totalResults}
                 loader={ <Spinner/>}
               >
        {/* {this.state.loading && <Spinner />} */}
        <div className='container'>
        <div className='row'>
          {  
            // if loading is true then not show anything.
             this.state.articles.map((element) => {
              // whenEver return in map use pass unique key in root tag, and similary pass in child tag unique
              return (<div className="col-md-4" key={element.url} >

                {/* display fixed amount  */}
               
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} des={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>)
            })
            
          }
          </div>

        </div>
      </InfiniteScroll>
       

      </div>



    )
  }
}

// Note page means Total number of page and pageSize means total number of item display per page 
