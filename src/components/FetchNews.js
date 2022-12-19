import React from 'react'
import classes from './FetchNews.module.css'
 const FetchNews = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <img className={classes.pad} src={props.urlToImage}/>
    </div>
  )
}

export default FetchNews;
