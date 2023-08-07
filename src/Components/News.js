
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
  
  }

  async updateNews() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true })

    this.props.setProgress(30)
    let data = await fetch(url);

    let parsedData = await data.json();

    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
     
    })
    this.props.setProgress(100);
    
  }

  async componentDidMount() {

    this.updateNews()

  }

 

  fetchMoreData = async () => {

    this.setState({page : this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);

    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
  

    })
  };

  render() {
    return (
      <>

        <h1 className='text-center'  style={{margin:"35px 0px"}}>NewsLite : Top {this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} HeadLine</h1>
        
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
               
                <NewsItem title={element.title ? element.title.slice(0, 50) : ""} des={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
              </div>)
            })
            
          }
          </div>

        </div>
      </InfiniteScroll>
      
      </>
    )
  }
}

// Note page means Total number of page and pageSize means total number of item display per page 
