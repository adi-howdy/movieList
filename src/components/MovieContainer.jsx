import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function MovieContainer(props){
    const {Title, Poster} = props.movie;
    return(
        <>
        <article className="mainContainer">
        <h5 className="title"> {Title}</h5>
        <div className="img-container">
        <img src={Poster}  className="images"/>
        </div>
        <Link to={`/MoviesDetails/${Title}`}> Details </Link>
        </article>
        </>
    )
}
 
export default MovieContainer;