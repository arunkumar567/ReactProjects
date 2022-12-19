import React, { useEffect, useState } from "react";
import FetchNews from "./FetchNews";
import Loading from "./Loading";

const NewsFile = () => {
  const [newsData, setNewsData] = useState([]);
  const[loading, setLoading]= useState(false);
  
  const FetchNewsHandler = () => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-11-18&sortBy=publishedAt&apiKey=9734c38bc1dc47dbaab12e7a3028f009')
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setNewsData(response.articles);
        setLoading(true);
        
      })
      
      
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    FetchNewsHandler();
  }, []);
  console.log(newsData);
        console.log(loading);
  

  return (
    <div>
      { loading? newsData.map((item) => {
        return( <FetchNews key={item.publishedAt} 
        title={item.title}
        urlToImage = {item.urlToImage}
        url={item.url}/>);
      }): <Loading/>}
            
    </div>
  );
};

export default NewsFile;
