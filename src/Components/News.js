
import React, { Component } from 'react'
import NewsItem from './NewsItem'

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
  constructor(){
    super();
  this.state={
    // articles : this.articles,
    articles : [],
    loading : true
  }
  console.log(this.state);
}

async componentDidMount(){
  let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=a31190680ad043ef938f39cd742fb8c6&page=1";
  let data = await fetch(url);

  let parsedData=await data.json();
  this.setState({articles : parsedData.articles})

}

 handlePrevClick= async()=>{

  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=a31190680ad043ef938f39cd742fb8c6&page=${this.state.page-1}`;

  let data = await fetch(url);

  let parsedData=await data.json();
  this.setState({
    page: this.state.page-1,
       articles:parsedData.articles
  })
}

 handleNextClick=async ()=>{

let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=a31190680ad043ef938f39cd742fb8c6&page=${this.state.page+1}`;

  let data = await fetch(url);

  let parsedData=await data.json();

  this.setState({
       page: this.state.page+1,
       articles: parsedData.articles
  })
} 

  render() {
    return (
      <div className='container my-3'>
         <h3>NewsLite : Top HeadLine</h3>
         <div className='row'>
                  {
                    this.state.articles.map((element)=>{
                      // whenEver return in map use pass unique key in root tag, and similary pass in child tag unique
                      return (  <div  key={element.url}  className='col-md-4'>

                      <NewsItem title={element.title?element.title.slice(0,45):""} des={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url} />
                      </div>)
                    })
                  }
             {/* col-md-4  (create 3 column medium divides*/}
        

       
        </div>

        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className='btn btn-dark' onClick={this.handlePrevClick}>&larr; previous</button>
          <button type="button" className='btn btn-dark' onClick={this.handleNextClick}>next &rarr;</button>
        </div>
       
      </div>

      

    )
  }
}
