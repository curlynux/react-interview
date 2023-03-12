import logo from './logo.svg';
import './App.css';
import { movies$ } from './data/movies';
import {useEffect, useState} from "react"

// function to render one movie
function OneMovie({id, title, category, likes, dislikes}) {
  
  return (
    <div className='oneMovie'>
      <div id={id}>
        <h3>{title}</h3>
        <p>{category}</p>
        <span>{likes}</span>
        <span>{dislikes}</span>
      </div>
    </div>
  )
}

// function to like a movie
function LikeMovie({id, movies, setMovies}) {
  movies[id].likes++;
  setMovies(movies);
}
// function to dislike a movie
function DislikeMovie({id, movies, setMovies}) {
  movies[id].dislikes--;
  setMovies(movies);
}

function App() {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => 
  {
    movies$.then(data => 
        setMovies(data)
      )
  }, [])
  return (
    <div className="App">
      {movies.map(item => <OneMovie 
      key={item.id}
      id={item.id}
      title={item.title}
      category={item.category}
      likes={item.likes}
      dislikes={item.dislikes}
       />)}
    </div>
  );
}

export default App;
