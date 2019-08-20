import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';

const OpeningCrawl = ({title, date, episode, text}) => {
  console.log(title)
  return (
    <Crawl 
    title = {title}
    subtitle ={episode}
    text = {text}
    />
  )
}

export default OpeningCrawl;
