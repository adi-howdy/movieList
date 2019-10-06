import React, { Component } from 'react';
import MyContext from './MyContext';
import items from '../movielist.js';
import { connect } from 'tls';

class MyProvider extends Component {
    state = { 
        movie: [], 
        movieAll: [],
        movieFeatured: [],
        movieFilter: [],
       // movieFiltered:[],
        series: [],
        value: "All",
        rating: 0,
        maxRating: 0,
        minRating: 0
    }

    componentDidMount(){
       let movie =  this.formatData(items);
       let movieFeatured = movie.filter( item => 
            item.Year === "2019")
       let movieAll = movie.filter(item => item.Type === "movie")
       let movieFilter = movie.filter(item => item.Type === "movie") 
       let series = movie.filter(item => item.Type === "series")
       
       let maxRating = Math.max(...movie.map(item => 
           isNaN(Number(item.imdbRating)) ?  0: Number(item.imdbRating)
    ))
    let minRating = Math.min(...movie.map(item => 
        isNaN(Number(item.imdbRating)) ?  0: Number(item.imdbRating)
 ))
        
       this.setState({
           movie: movie,
           movieFeatured: movieFeatured,
           movieAll : movieAll,
           movieFilter,
           series,
           minRating,
           maxRating
          // movieFiltered
       })
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        }, this.movieFiltered)
    }

    formatData(movieItems){
        let tempItems = movieItems.map(movie => {
           return movie;
        })
        return tempItems;
    }

    getMovies = (title) => {
        let tempMovies = [...this.state.movie];
        let SingleMovies = tempMovies.find(temp => temp.Title === title);
        return SingleMovies;        
    }

    movieFiltered = () => {
       let tempMovies = [...this.state.movie];
       let filterMovie = tempMovies.filter(movie=> {
           return(this.state.value==="All" ? movie.Type.includes("movie") : movie.Genre.includes(this.state.value)) 
       })
       return filterMovie;
    }

    render() { 
        return ( 
            <MyContext.Provider value={{...this.state, getMovies:this.getMovies, handleChange:this.handleChange, movieFiltered: this.movieFiltered}}>
                {this.props.children}
            </MyContext.Provider>
         );
    }
}
 
export default MyProvider;
