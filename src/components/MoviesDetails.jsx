import React, { Component } from 'react';
import MyContext from './MyContext';
import { Link } from 'react-router-dom';

class MoviesDetails extends Component {
    constructor(props){
        super(props)
        this.state ={
            title: this.props.match.params.id
        }
    }
    state = {  }
    static contextType = MyContext;

    render() { 
        let { getMovies } = this.context;
        let singleMovie = getMovies(this.state.title);
        if(!singleMovie){
            return(
                <div>
                <p>Error</p>
                <Link to="/FeaturedMovies"> Go to Featured Movie </Link>
                </div>
            );
        }
        console.log(singleMovie);
        const {Title, Actors, Genre, Poster, imdbRating, Year, Plot} = singleMovie;
        return ( 
            <>
            <article className="MoviesArticle">
            <h5>{Title}</h5>
            <img src={Poster} />
            <section className="MoviesDetails">
            <p>Actors: {Actors}</p>
            <p>Genre: {Genre}</p>
            <p>Year of Release: {Year}</p>
            <p>imdbRating: {imdbRating}</p>
            <p>Plot: {Plot}</p>
            </section>
            </article>
            </>
         );
    }
}
 
export default MoviesDetails;

