import React, { Component } from 'react';
import MyConsumer from './MyConsumer';
import MovieContainer from './MovieContainer';

function Series() {
    
        return ( 
            <MyConsumer>
            {
                value=> {
                    const {series} = value;
                    console.log(series);
                    const seriesAll = series.map(item => {
                        return (
                            <MovieContainer movie={item} />
                        )
                    })
                    return(
                        <>
                        <section>
                        {seriesAll}
                        </section>
                        </>
                    )
                   
                }
            }
            </MyConsumer>
         );
    }

 
export default Series;