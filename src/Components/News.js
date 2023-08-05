
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {


static defaultProps={
  country:'in',
  pageSize :8,
  category:'general'
}
static propTypes={
  country : PropTypes.string,
  pageSize: PropTypes.number,
  category:PropTypes.string,
}

  constructor(){

    // first call constructor then call componentDidMount.
    
    super();
  this.state={
    // articles : this.articles,
    articles : [],
    loading : false,
    page:1
  }
  console.log(this.state);
}

async updateNews(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a31190680ad043ef938f39cd742fb8c6&page=${this.state.page}&pageSize=${this.props.pageSize}`;

  this.setState({loading: true})
  let data = await fetch(url);

  let parsedData=await data.json();
  this.setState({articles : parsedData.articles,
    totalResults:parsedData.totalResults,
     loading : false
  })
}

async componentDidMount(){

  this.setState({page: this.state.page})
  this.updateNews()
  
}

 handlePrevClick= async()=>{
  console.log("prev")
  this.setState({page: this.state.page-1})
  this.updateNews()
}

 handleNextClick=async()=>{
  console.log("next")
  // literal

  // if page size are not greater than original size.
  if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){ 

this.setState({page: this.state.page+1})
this.updateNews()
}
} 

  render() {
    return (
      <div className='container my-3'>
         <h2>NewsLite : Top HeadLine</h2>
         {this.state.loading&&<Spinner/>}
         <div className='row'>
                  {
                    // if loading is true then not show anything.
                    !this.state.loading && this.state.articles.map((element)=>{
                      // whenEver return in map use pass unique key in root tag, and similary pass in child tag unique
                      return (  <div  className="col-md-4" key={element.url} >

                   {/* display fixed amount  */}
                      
                      <NewsItem title={element.title?element.title.slice(0,45):""} des={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                      </div>)
                    })
                  }
             {/* col-md-4  (create 3 column medium divides*/}
        

       
        </div>

        <div className='container d-flex justify-content-between'>

          {/* disabled={this.state.page<=1} button is disabled when page  size is less than 1 */}
          <button disabled={this.state.page<=1} type="button" className='btn btn-dark' onClick={this.handlePrevClick}>&larr; previous</button>

          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark"onClick={this.handleNextClick}>next &rarr;</button>
      
        </div>
       
      </div>

      

    )
  }
}

// Note page means Total number of page and pageSize means total number of item display per page 
