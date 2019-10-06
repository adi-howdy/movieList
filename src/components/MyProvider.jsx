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
        value: "Comedy"
    }

    componentDidMount(){
       let movie =  this.formatData(items);
       let movieFeatured = movie.filter( item => 
            item.Year === "2019")
       let movieAll = movie.filter(item => item.Type === "movie")
       let movieFilter = movie.filter(item => item.Type === "movie") 
       let series = movie.filter(item => item.Type === "series")
       this.setState({
           movie: movie,
           movieFeatured: movieFeatured,
           movieAll : movieAll,
           movieFilter,
           series
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
           //let movie = {...item};
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
           //console.log(this.state.value);
           //console.log(movie);
           return(movie.Genre.includes(this.state.value)) 
       })
       console.log(filterMovie);
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
