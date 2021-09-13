import React from "react";
import { actors } from "../data";
// console.log(actors)
const actorsList = actors.map(actor => {
  const actorMovies = actor.movies.map(movie => <li key={movie}>{movie}</li> )
  return(
    <div key={actor.name}>
      <h3>Name: {actor.name}</h3>
      Movies:
      <ul>
      {actorMovies}
      </ul>
    </div>
  )
})
function Actors() {
  return ( 
  <div>
    <h1>Actors Page</h1>
    {actorsList}
    </div>
  )
}

export default Actors;
