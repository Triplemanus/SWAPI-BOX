import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import './OpeningCrawl.css'
const OpeningCrawl = ({title, date, episode, text}) => {
  console.log(title)
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
