import React, { useState, useEffect } from "react";
import {api}from "../utils/api";


function MovieUpdate(props) {
    const [movie, setMovie] = useState({
        id:"",
        title: "",
        director: "",
        metascore: "",
        stars: ""
    })

    useEffect(() => {
        api()
            .get(`api/movies/${props.match.params.id}`)
            .then((result) => {
                setMovie(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [props.match.params.id])

    const handleChange = (event) => {
        setMovie({
            ...movie,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        api()
            .put(`api/movies/${movie.id}`, movie)
            .then((result) => {
                props.history.push("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <h1>Update Movie</h1>
            
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="title"
                placeholder="Title"
                value={movie.title}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="director"
                placeholder="Director"
                value={movie.director}
                onChange={handleChange}
                />
                <input 
                type="number"
                name="metascore"
                placeholder="Metascore"
                value={movie.metascore}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="stars"
                placeholder="Stars"
                value={movie.stars}
                onChange={handleChange}
                />

                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default MovieUpdate;