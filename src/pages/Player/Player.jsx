import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTQwOWFiOTc4MzVjODlkNjllMjQ4ZDk2NzMzNzNjMCIsInN1YiI6IjYyNWMxMTYwZjEwYTFhMTVlYjBhMGEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kyl0UauJduUukLdhb5gbpGLmpQwecIVGcYneVDb8i8s'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
      .then(response => response.json())
      .then(response => {
        const trailer = response.results.find(result => result.name.includes("Official Trailer"));
        if (trailer) {
          setApiData(trailer);
        } else {
          setApiData(response.results.find(result => result.name.includes("Trailer")))
        }
      }).catch(err => console.error(err));
  },[]);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => {navigate('/')}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>

      </div>
    </div>
  )
}

export default Player