import React,{useContext} from 'react';
import { MovieContext } from './moviesContext';

export default function NavBar() {
  const [movies,setMovies] = useContext(MovieContext);
    return (
    <div>
        <h2>Movies Mania</h2>
        <h4>List of movies : {movies.length}</h4>
        <p></p>
    </div>
  )
}
