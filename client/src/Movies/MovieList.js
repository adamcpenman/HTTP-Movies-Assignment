import React, { useState, useEffect } from "react";
import MovieDetails from "./MovieDetails";
import { api } from "../utils/api";


function MovieList(props) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    api()
      .get("api/movies")
      .then((result) => {
        setMovies(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleDelete = (event, id) => {
    event.preventDefault()

    //give users object incase we need to restore it
    const movie = movies.find(movie => movie.id === id)

    if (window.confirm("Are you sure?")) {
      setMovies(movies.filter(movie => movie.id !== id))

      api()
        .delete(`api/movies/${id}`)
        .then((result) => {
          console.log("KABOOM")
        })
        .catch((error) => {
          console.log(error)
          //put movie back if was unsuccesfull
          setMovies([...movies, movie])
        })
    }
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div>
          <MovieDetails key={movie.id} movie={movie} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  )
}

export default MovieList

// export default class MovieList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movies: []
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/api/movies")
//       .then(res => this.setState({ movies: res.data }))
//       .catch(err => console.log(err.response));
//   }

//   render() {
//     return (
//       <div className="movie-list">
//         {this.state.movies.map(movie => (
//           <MovieDetails key={movie.id} movie={movie} />
//         ))}
//       </div>
//     );
//   }
// }

// function MovieDetails({ movie }) {
//   return (
//     <Link to={`/movies/${movie.id}`}>
//       <MovieCard movie={movie} />
//     </Link>
//   );
// }
