import React, { useState } from "react";
import { api } from "../utils/api";

function AddMovies(props) {
    const [newMovie, setNewMovie] = useState({
        title: "",
        director: "",
        metascore: "",
        stars: []
    })

    const handleChange = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        api()
            .post("api/movies", newMovie)
            .then(res => setNewMovie({
                ...newMovie,
                title: "",
                director: "",
                metascore: "",
                stars: ""
            }))
            
            .catch(error => console.log(error, "ERROR"))
    }

    return (
        <div>
            <form value={newMovie.id} onSubmit={handleSubmit}>
                <input 
                type="text"
                name="title"
                placeholder="Title"
                value={newMovie.title}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="director"
                placeholder="Director"
                value={newMovie.director}
                onChange={handleChange}
                />
                <input 
                type="number"
                name="metascore"
                placeholder="Metascore"
                value={newMovie.metascore}
                onChange={handleChange}
                />
                <input 
                type="text"
                name="stars"
                placeholder="Stars"
                value={newMovie.stars}
                onChange={handleChange}
                />

                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default AddMovies