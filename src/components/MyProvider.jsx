import React, { Component } from 'react';
import MyContext from './MyContext';
import items from '../movielist.js';

class MyProvider extends Component {
    state = { 
        movie: [], 
        movieAll: [],
        movieFeatured: [],
        movieFilter: [],
        series: []
    }

    componentDidMount(){
       let movie =  this.formatData(items);
       let movieFeatured = movie.filter( item => 
            item.Year === "2019")
       let movieAll = movie.filter(item => item.Type === "movie") 
       let series = movie.filter(item => item.Type === "series")
       this.setState({
           movie: movie,
           movieFeatured: movieFeatured,
           movieAll : movieAll,
           series
       })
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

    render() { 
        return ( 
            <MyContext.Provider value={{...this.state, getMovies:this.getMovies}}>
                {this.props.children}
            </MyContext.Provider>
         );
    }
}
 
export default MyProvider;
