import React,{useState,useContext} from "react";
import { MovieContext } from "./moviesContext";

export default function MoviesList() {
 const [movies,setMovies] = useContext(MovieContext);
    return (
    <div>
        {movies.map(movie=>(<li>{movie.name}</li>))}
    </div>
  );
}
