import React, { useState,useEffect } from "react";
import Header from '../header/header';
import Preview from '../preview/preview';
import List from '../list/list';
import { IMovieItem } from "../dto";
import MovieService from '../service/movieService';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

///const key = 'cbf6d6f193d7d4a9b8ee613671126788';
//const dataUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=$en&page=1`;
//fetch(dataUrl).then(res=>res.json()).then(res=> console.log(res))

export default function Application() {
  const [movieList, setMovieList] = useState<Array<IMovieItem>>([]);
  const movieService = new MovieService();
   useEffect(()=>{
     movieService.getPopularMovie()
       .then(data => setMovieList(data));
    }, [])
  
    return (
      <>
        <BrowserRouter>
          <Header />        
          <Switch>
            <Route exact path='/'>
              <Preview/>
              <List movieList={movieList} />
            </Route>
            <Route path='/movie'>
              <h1>About Movie</h1>
            </Route>
          </Switch>       
        </BrowserRouter>
      </>      
    )
} 