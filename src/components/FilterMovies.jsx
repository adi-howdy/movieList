import React, { Component } from 'react';
import MyContext from './MyContext';
import MovieContainer from './MovieContainer';

class FilterMovies extends Component {

    static contextType = MyContext;

    state = {  
        genre : []
    }

    
    render() { 
        const {movieFilter} = this.context;

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
                    <option value="item" key="index">{item}</option>
            
        )})

        const movieFilter1 = movieFilter.map(item => {
           return(
            <MovieContainer movie={item}/>
           )
        })

        const genre = getUniqueGenre(movieFilter, 'Genre')
        return ( 
            <>
            <form>
                <label htmlFor="type">Type of Movie</label>
                <select name ="type" id="type">
                    {uniqueGenre}
                </select>
            </form>
            <section>
               {movieFilter1}
            </section>
            </>
         );
    }
}
 
export default FilterMovies;