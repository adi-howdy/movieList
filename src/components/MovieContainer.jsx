import React, { Component } from 'react';

function MovieContainer(props){
    const {Title, Poster} = props.movie;
    return(
        <>
        <article className="mainContainer">
        <h5 className="title"> {Title}</h5>
        <div className="img-container">
        <img src={Poster}  className="images"/>
        </div>
        </article>
        </>
    )
}
 
export default MovieContainer;