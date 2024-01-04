import React, {useState,useContext} from 'react'
import { MovieContext } from './moviesContext';

export default function AddMovie() {
    
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [movies,setMovies] = useContext(MovieContext);
    const updateName = (e)=>{ 
        setName(e.target.value);
    }

    const updatePrice = (e)=>{ 
        setPrice(e.target.value);
    }

    const submit = (e)=>{
        e.preventDefault();
        setMovies(prevMovies=> [...prevMovies, {name:name,price:price,id:'022000'}]);
    }

    return (
    <div>
     <form onSubmit={submit}>
        <input type='text' name='name' value={name} onChange={updateName}></input>
        <input type='text' name='price' value={price} onChange={updatePrice}></input>
         <button >Add Movie</button>
     </form>

    </div>
  )
}
