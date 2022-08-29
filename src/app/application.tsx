import React, { useState,useEffect, useMemo } from "react";
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
  const [movieId, setMovieId] = useState<number>(0)
  const [selectMovie, setSelectMovie] = useState<IMovieItem>();
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);
  const movieService = new MovieService();

  const getMovie = (id:number) => {
    setLoading(true);    
    setMovieId(id);
    movieService.getMovie(id).then((data) => {
      setSelectMovie(data);
      setError(false);
      setLoading(false);      
    }).catch(() => {
      setError(true);
    })
  };
  
  useEffect(() => {
    movieService.getPopularMovie()
      .then(data => setMovieList(data));
  }, []);
 
    return (
      <>
        <BrowserRouter>
          <Header onRandom={ (randomId)=>getMovie(randomId)} />        
          <Switch>
            <Route exact path='/'>
              <Preview/>
              <List movieList={movieList} onSelect={(id)=>getMovie(id)} />
            </Route>
            <Route exact path={'/movie' + movieId}>
              {error?<p>error</p>:null}
              {loading?<p>Spiner</p>:<AboutMovie item={selectMovie} />}     
            </Route>
          </Switch>       
        </BrowserRouter>
      </>      
    )
} 