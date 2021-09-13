import React from "react";
import { directors } from "../data";
console.log(directors)
const directorList = directors.map(director => {
  const movieList = director.movies.map(movies => <li key={movies}>{movies}</li>)
  return(
    <div key={director.name}>
      <h3>Name: {director.name}</h3>
      Movies:
      <ul>
      {movieList}
      </ul>
    </div>
  )
})
function Directors() {
  return( 
  <div>
    <h1>Directors Page</h1>
    {directorList}
    </div>
    )
}

export default Directors;
