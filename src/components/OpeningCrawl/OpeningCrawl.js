import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import './OpeningCrawl.scss'
const OpeningCrawl = ({title, date, episode, text, hideLanding}) => {
  const romanNum = () => {
    let roman = [0, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']
    return roman[episode]
  }
  return (
    <article>
      <Crawl 
      title = {`Episode ${romanNum()}`}
      subTitle={title}
      text = {text + date}
      />
      <button className="hide-movie" onClick={()=> hideLanding()}>Skip Movie Stuff</button>
    </article>
  )
}

export default OpeningCrawl;
