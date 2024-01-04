import logo from './logo.svg';
import './App.css';
import MoviesList from './moviesList';
import NavBar from './navBar';
import { MovieProvider } from './moviesContext';
import AddMovie from './addMovie';

function App() {
  return (
    <div className="App">
     <MovieProvider>
     <NavBar/>
     <AddMovie/>
        <img src={logo} className="App-logo" alt="logo" />
      <MoviesList/>
      </MovieProvider>
    </div>
  );
}

export default App;
