import React, { Component } from 'react';
import MyContext from './MyContext';
import MovieContainer from './MovieContainer';

class FilterMovies extends Component {

    static contextType = MyContext;

    state = {  
        genre : []
    }

    render() { 
        const {movieFilter, handleChange, movieFiltered} = this.context;
        let movieFilter_after = movieFiltered();
        
        var type = new Array();
        let unique = movieFilter.map(item=> {
            item.Genre.split(",").map(item=> type.push(item.trim()))
        })

        const getUniqueGenre = () => {
            return(Array.from(new Set(type)))
        }

        let uniqueGenre = getUniqueGenre();
        uniqueGenre = uniqueGenre.map((item,index) => {
            return (
                    <option value={item} key={index}>{item}</option>
        )})

        const movieFilter1 = movieFilter_after.map(item => {
           return(
            <MovieContainer movie={item}/>
           )
        })

        const genre = getUniqueGenre(movieFilter, 'Genre')
        return ( 
            <>
            <form>
                <label htmlFor="genre">Type of Movie</label>
                <select name ="genre" id="genre" value={this.value} onChange={handleChange}>
                    <option value="all">All</option>
                    {uniqueGenre}
                </select>
            </form>
            <form>
                <label htmlFor="rating">IMDB Rating ${movieFilter1.imdbRating}</label>
                <input type="range" name="rating" id="rating" min={this.minRating} max={this.minRating} onChange={handleChange}/>
            </form>
            <section>
               {movieFilter1}
            </section>
            </>
         );
    }
}
 
export default FilterMovies;