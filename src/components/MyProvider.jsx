import React, { Component } from 'react';
import MyContext from './MyContext';
import items from '../movielist.js';

class MyProvider extends Component {
    state = {  
        movieAll: [],
        movieFeatured: [],
        movieFilter: []
    }

    componentDidMount(){
       let movie =  this.formatData(items);
        let movieFeatured = movie.filter( item => 
            item.Year === "2019")
       this.setState({
           movie: movie,
           movieFeatured: movieFeatured
       })
    }

    formatData(movieItems){
        let tempItems = movieItems.map(movie => {
           //let movie = {...item};
           return movie;
        })
        return tempItems;
    }

    render() { 
        return ( 
            <MyContext.Provider value={{...this.state}}>
                {this.props.children}
            </MyContext.Provider>
         );
    }
}
 
export default MyProvider;
