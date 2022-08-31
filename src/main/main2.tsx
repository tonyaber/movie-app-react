import { useState,useEffect } from "react";
import Header from '../header/header';
import Preview from '../preview/preview';
import List from '../list/list';
import AboutMovie from '../aboutMovie/aboutMovie';
import { IMovieItem } from "../dto";
import MovieService from '../service/movieService';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import SearchPanel from "../header/searchPanel";
import styled from "styled-components";
import React from "react";

interface IMain {
  popularMovieList: IMovieItem[];
  movieService: MovieService;
}


export default function Main({popularMovieList, movieService}:IMain) {
  const [movieList, setMovieList] = useState<Array<IMovieItem>>([]);  
  const [movieId, setMovieId] = useState<number>(0)
  const [selectMovie, setSelectMovie] = useState<IMovieItem>();
  const [favoriteMovies, setFavoriteMovies] = useState<Array<IMovieItem>>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  //const [error, setError] = useState<Boolean>(false);

  const setMovie = (id: number) => {
    setLoading(true);    
    setMovieId(id);
    const favorite = Boolean(favoriteMovies.find(it => it.id === id));    
    movieService.getMovie(id).then((data) => {
      setSelectMovie({ ...data, favorite });
      setLoading(false);
    });    
  };
  
  const setMovieSearch = (text: string) => {
    setLoading(true);
    if (!text.length) {      
      setMovieList(popularMovieList);
      setLoading(false);
      return;
    }
    movieService.getMovieSearch(text).then((data) => {
      setLoading(false);
      setMovieList(data);
     })
  }

  const addToFavorite = (id: number) => {
    const index = favoriteMovies.findIndex(it => it.id === id) 
    if (index === -1) {
      movieService.getMovie(id).then((data) => {
        setSelectMovie({ ...selectMovie, 'favorite': true});
        setFavoriteMovies((favoriteMovies)=>[...favoriteMovies, data]);        
      })
    } else {
      setFavoriteMovies((favoriteMovies) => {
        favoriteMovies.splice(index, 1);
        setSelectMovie({ ...selectMovie, 'favorite': false});
        return favoriteMovies;
      })
    }
  }

  useEffect(() => {
    if (popularMovieList.length) {
      setMovieList(popularMovieList)
      setLoading(false);
    }
},[popularMovieList])


  return (
    <BrowserRouter>
          <Header onFavoriteClick={() => setMovieList(favoriteMovies)} onPopularMovie={()=>setMovieList(popularMovieList) } />        
          <Switch>
            <Route exact path='/'>
              <SearchPanel onSearchPanel={(text) => setMovieSearch(text)} />
              <br/>
              {!movieList.length&&!loading?
                <p style={{color: "white"}}>Nothing</p> :
                <>    
                  {loading ? <p style={{color: "white"}}>Spinner</p> :
                    <>
                      <Preview movieList={ popularMovieList} />
                      <List movieList={movieList} onSelect={(id) => setMovie(id)} />
                    </>
                  }  
                </>
              }              
            </Route>
            <Route exact path={'/movie' + movieId}>
              {loading ?
                <p style={{ color: "white" }}>Spinner</p> :
                <AboutMovie item={selectMovie} onAddToFavorite={(id) => addToFavorite(id)} />}     
            </Route>
            <Route exact path='/favorite'>
              {!movieList.length && !loading ?
                <p style={{color: "white"}}>Nothing</p> :
                <>
                  {loading ? <p>Spinner</p> : <List movieList={movieList} onSelect={(id) => setMovie(id)} />}
                </>}
            </Route>
          </Switch>       
        </BrowserRouter>
  )
 }