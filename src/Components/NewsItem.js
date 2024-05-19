import React, { Component } from "react";

export default class NewsItem extends Component {
  
  render() {
    let {title,desc,ImageUrl,url,author,date,source} = this.props;
    return (
      
      <div className="card my-4 mx-4" style={{width: "18rem"}}>

        <div className="container"> <span className="badge rounded-pill text-bg-danger" style={{display: 'flex',
          position: 'absolute',
          left: '0',
          justifyCcontent: 'flex-start'}}>{source}</span></div>
       
        <img src={ImageUrl} className="card-img-top" alt=" loading error...." />
        
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
          {desc}
          </p>
          <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={url} className="btn btn-primary bg-dark" target="_blank">
            Read More
          </a>
        </div>

       
      </div>

     
    );
  }
}
