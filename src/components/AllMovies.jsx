import React, { Component } from 'react';
import MyConsumer from './MyConsumer';
import MovieContainer from './MovieContainer';

function AllMovies(){
    
    return(
       <MyConsumer>
           {value => {
               const {movieAll} = value;
               const allMovie = movieAll.map(item => {
                    return <MovieContainer movie={item} />
               })
               return(
                   <>
                   <section>
                       {allMovie}
                   </section>
                   </>
               )
           }}
       </MyConsumer>
    )
}
 
export default AllMovies;