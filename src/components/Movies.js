import React from "react";
import { movies } from "../data";
// console.log(movies)

const movieList = movies.map(movie => {
  const genres = movie.genres.map(genre => <li key={genre}>{genre}</li>)
  return(
    <div key={movie.title}>
      <h3>Title : {movie.title}</h3>
      Run Time : {movie.time}
      <ul>
        {genres}
      </ul>
    </div>
  )
})
function Movies() {
  return( 
  <div>
    <h1>Movies Page</h1>
    {movieList}
    </div>
    )
}

export default Movies;
