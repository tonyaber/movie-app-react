import React, { useState,useEffect } from "react";
import Header from '../header/header';
import Preview from '../preview/preview';
import List from '../list/list';
import AboutMovie from '../list/aboutMovie';
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
  const [selectMovieId, setSelectMovieId] = useState<number>(null);
   const [selectMovie, setSelectMovie] = useState<IMovieItem>(null);
  const movieService = new MovieService();
  useEffect(() => {
    if (selectMovieId) {
      movieService.getMovie(selectMovieId).then((data) => setSelectMovie(data))
    }
  }, [selectMovieId]);
  
  useEffect(() => {
    movieService.getPopularMovie()
      .then(data => setMovieList(data));
  }, []);
 
    return (
      <>
        <BrowserRouter>
          <Header />        
          <Switch>
            <Route exact path='/'>
              <Preview/>
              <List movieList={movieList} onSelect={(id)=>setSelectMovieId(id)} />
            </Route>
            <Route exact path='/movie'>
              {selectMovie?<AboutMovie item={selectMovie} />:null}     
            </Route>
          </Switch>       
        </BrowserRouter>
      </>      
    )
} 