import React, { Component } from 'react';
import MyContext from './MyContext';
import Title from './Title';
import MovieContainer from './MovieContainer';

class FeaturedMovies extends Component {
    state = {  }
    
    static contextType = MyContext;
    
    render() { 
        let {movieFeatured} = this.context;
        const movies = movieFeatured.map(item =>
            {
                return <MovieContainer movie={item}/>
            })
        return ( 
            <>
                <section className="movieContainer">
                   {movies}
                </section>     
            </>
         );
    }
}
export default FeaturedMovies;


 
