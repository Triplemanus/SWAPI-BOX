import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import './OpeningCrawl.scss'
import PropTypes from 'prop-types'

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

OpeningCrawl.propTypes = {
  title: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hideLanding: PropTypes.func.isRequired
}