import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieUpdate from "./Movies/UpdateMovie";
import AddMovies from "./Movies/AddMovies";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route exact path="/update-movie/:id" component={MovieUpdate} />
      <Route path="/add-movie" render={props => {
        return <AddMovies {...props} component={AddMovies}/>}}/>
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
        
      />
    </>
  );
};

export default App;
