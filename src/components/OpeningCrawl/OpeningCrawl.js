import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import './OpeningCrawl.scss'
const OpeningCrawl = ({title, date, episode, text}) => {

  return (
    <article>
      <Crawl 
      title = {title}
      subtitle ={episode}
      text = {text}
      />
      <button className="hide-movie">Skip Movie Stuff</button>
    </article>
  )
}

export default OpeningCrawl;
