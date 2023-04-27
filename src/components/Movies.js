import React from "react";
import { movies } from "../data";

function Movies() {
  return (<div>
            {/*{code here}*/}
            <h1>Movies Page</h1>
            {movies.map( (movie) => {
             return( <div key={movie.title}>
                        <h2>{movie.title}</h2>
                        <p>Time: {movie.time}</p>
                        <ul>
                            {movie.genres.map( (genre) => {
                            return <li key={genre}>{genre}</li>;
                            })}
                        </ul>
                      </div>)
            })}
          </div>);
}

export default Movies;
