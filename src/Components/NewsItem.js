import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {

    let { title, des, imgUrl, newsUrl, author, date } = this.props;

    return (

      <div className='my-3'>
        <div className="card">
     
          <img src={!imgUrl ? " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUlAUwSHd_yTBRL94_Wj0SYPfB_-IoMPwbDteQ3w0MFg&s" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{des}...</p>

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
}

export default NewsItem