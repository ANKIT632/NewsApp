
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

//  articles=  [
//   {
//       "source": {
//           "id": "espn-cric-info",
//           "name": "ESPN Cric Info"
//       },
//       "author": null,
//       "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//       "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//       "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//       "publishedAt": "2020-04-27T11:41:47Z",
//       "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//   },
//   {
//       "source": {
//           "id": "espn-cric-info",
//           "name": "ESPN Cric Info"
//       },
//       "author": null,
//       "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//       "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//       "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//       "publishedAt": "2020-03-30T15:26:05Z",
//       "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//   }, 
  
// ]

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

async componentDidMount(){
  // pageSize show number of item per page.

  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a31190680ad043ef938f39cd742fb8c6&page=1&pageSize=${this.props.pageSize}`;

  this.setState({loading: true})
  let data = await fetch(url);

  let parsedData=await data.json();
  this.setState({articles : parsedData.articles,
    totalResults:parsedData.totalResults,
     loading : false
  })
  
}

 handlePrevClick= async()=>{
  console.log("prev")
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a31190680ad043ef938f39cd742fb8c6&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;

  this.setState({loading: true})
  let data = await fetch(url);

  let parsedData=await data.json();

  this.setState({
    page: this.state.page-1,
    articles:parsedData.articles,
    loading: false
  })
}

 handleNextClick=async()=>{
  console.log("next")
  // literal

  // if page size are not greater than original size.
  if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){ 

let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a31190680ad043ef938f39cd742fb8c6&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

this.setState({loading: true})
  let data = await fetch(url);

  let parsedData=await data.json();

  
   console.log(parsedData)
  this.setState({
       page: this.state.page+1,
       articles: parsedData.articles,
       loading: false
  })}
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
