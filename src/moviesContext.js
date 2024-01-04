import React,{useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props)=>{
    const [movies,setMovies] = useState([
        {
         name:"Top Guns",
         price:12,
         id:2342
        },
        {
         name:"Gangster",
         price:42,
         id:2352
        }
        ,{
         name:"Top Guns 2",
         price:155,
         id:23112
        },
        {
         name:"Inception",
         price:72,
         id:2342221
        },
        {
         name:"Catch me if you can",
         price:99,
         id:200012
        },
    ]);

  return (
    <MovieContext.Provider value={[movies,setMovies]}>
        {props.children}
    </MovieContext.Provider>
  );
}

