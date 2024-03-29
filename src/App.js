import React from 'react';
import './App.css';
import FeaturedMovies from './components/FeaturedMovies';
import AllMovies from './components/AllMovies';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Series from './components/Series';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyProvider from './components/MyProvider';
import MoviesDetails from './components/MoviesDetails';
import FilterMovies from './components/FilterMovies';

function App() {
  return (
    <>
    <MyProvider>
    <Router>
    <NavBar />
      <Switch>
        <Route exact path="/" component={FeaturedMovies}/>
        <Route path="/AllMovies" component={AllMovies}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Series" component={Series}/>
        <Route path="/MoviesDetails/:id" component={MoviesDetails}/>
        <Route path="/FilterMovies" component={FilterMovies}/>
      </Switch>
    </Router>
    </MyProvider>
    </>
  );
}

export default App;
