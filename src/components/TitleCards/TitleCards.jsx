import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category, type}) => {
  const [apiData, setApiData] = useState([]); 
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTQwOWFiOTc4MzVjODlkNjllMjQ4ZDk2NzMzNzNjMCIsInN1YiI6IjYyNWMxMTYwZjEwYTFhMTVlYjBhMGEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kyl0UauJduUukLdhb5gbpGLmpQwecIVGcYneVDb8i8s'
    }
  };
  
  const handleWheel = (event) => {
    event.pereventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${type ? type : "movie"}/${category ? category : "now_playing"}`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{type === "tv" ? card.name : card.title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards