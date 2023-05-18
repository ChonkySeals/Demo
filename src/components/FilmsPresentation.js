import React from 'react'
import './styles/Main.css'

export default function FilmsPresentation({ films }) {
  console.log(films);
  return (
    <div className='container'>
      {films.map((film) => (
        <div className='column'>
          <div className='card'>
            <img src={film.img} alt='' />
            <h1>{film.title}</h1>
            <div className='description'>
              <p className='year'>Release year: {film.year}</p>
              <p className='nation'>Made in: {film.nation}</p>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}