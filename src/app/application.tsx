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

export default function Application() {
  const [movieList, setMovieList] = useState<Array<IMovieItem>>([]);
  const [movieId, setMovieId] = useState<number>(0)
  const [selectMovie, setSelectMovie] = useState<IMovieItem>();
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);
  const movieService = new MovieService();

  const setMovie = (id:number) => {
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
  
  const setMovieSearch = (text:string) => {
    movieService.getMovieSearch(text).then((data) => {
      setLoading(false);
      setMovieList(data);
     })
  }
  useEffect(() => {
    movieService.getPopularMovie()
      .then(data => {
        setLoading(false);
        setMovieList(data);
      });
  }, []);
 
    return (
      <>
        <BrowserRouter>
          <Header onRandom={ (randomId)=>setMovie(randomId)} onSearchPanel = {(text)=>setMovieSearch(text)} />        
          <Switch>
            <Route exact path='/'>
              {loading ? <p>Spiner</p> :  <Preview />}
              {!movieList.length&&!loading?
                <p>Nothing</p> :
                <>                 
                  <List movieList={movieList} onSelect={(id)=>setMovie(id)} />
                </>
              }
              
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