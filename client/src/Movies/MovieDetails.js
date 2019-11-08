import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

function MovieDetails({ movie, handleDelete }) {
    return (

        <Link to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} handleDelete={handleDelete} />
            <div onClick={(e) => handleDelete(e, movie.id)}>Delete</div>
        </Link>

    )
}

export default MovieDetails