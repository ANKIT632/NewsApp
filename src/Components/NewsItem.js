import React from 'react'
import newsImg from '../image/news.jpg'
const NewsItem = (props) => {

  let { title, des, imgUrl, newsUrl, author, date } = props;

  return (

    <div className='my-3' style={{ boxShadow:" 4px 4px 6px gray" }}>
      <div className="card ">

        <img src={!imgUrl ? newsImg : imgUrl} className="card-img-top" alt="..."  style={{height:"200px"}}/>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 40)}...</h5>
          <p className="card-text">{des.slice(0, 100)}...</p>

          {/*  new Date(date).toGMTString() convert iso format to GMT format */}

          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>

          {/* btn-sm (small size of button) */}
          {/* target="_blank" open in new tab  */}

          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}


export default NewsItem