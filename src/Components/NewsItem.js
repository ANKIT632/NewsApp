import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
  
    let {title,des,imgUrl,newsUrl}=this.props;

    return (
      
      <div className='my-3'>
            <div className="card" style={{width:"18rem"}}>
            <img src={!imgUrl?"https://imgeng.jagran.com/images/2023/jul/XBOX%20(1)1689688440483.jpg":imgUrl}className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{des}...</p>
        {/* btn-sm (small size of button) */}
        {/* target="_blank" open in new tab  */}
            <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem