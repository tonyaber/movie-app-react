import { useState,useEffect, useMemo } from "react";
import Header from '../header/header';
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
import Empty from '../empty/empty'
import Template from '../template/template';
import errorImage from '../assets/svg/error-animated.svg';
import { Helmet } from "react-helmet";
import GlobalStyles from './global';
import { setContent } from './setContent';

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 100px auto 0;
  padding: 20px;
`

export default function Application() {
  const [movieList, setMovieList] = useState<Array<IMovieItem>>([]);
  const [popularMovie, setPopularMovie] = useState<Array<IMovieItem>>([]);
  const [selectMovie, setSelectMovie] = useState<IMovieItem>();
  const [favoriteMovies, setFavoriteMovies] = useState<Array<IMovieItem>>([]);
  const [search, setSearch] = useState<string>('');
  const [process, setProcess] = useState<string>('loading');
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<number>(0);

  const movieService = useMemo<MovieService>(()=>new MovieService(),[]); 
  const setMovieSearch = (text: string) => {
    setSearch(text);
    setProcess('loading');
    setPage(1);
    if (!text.length) {      
      onPopularMovieClick();
      return;
    }
   
    movieService.getMovieSearch(text).then((data) => {
      setMovieList(data); 
      data.length ? setProcess('showSearchList') : setProcess('empty');
      
    })
      .catch(() => {
        setProcess('error')
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

  const onGenreClick = (id: number) => { 
    setGenre(id);
    setPage(1);
    if(!id){
      setMovieList(popularMovie);
      return;
    }
    setProcess('loading');
   
    movieService.getMoviesByGenre(id).then((data) => {
      setMovieList(data);
      setProcess('showGenreList');
    })
      .catch(() => {
        setProcess('error')
    })
    
  }

  const onPopularMovieClick = () => {
    setMovieList(popularMovie);
    setSearch('');
    setPage(1);
    setGenre(0);
    setProcess('showMovieList')
    //add cleanSearchPanel
  }

  // const getMoreMovie = () => {
  //     movieService.getMoreMovie()
  //     .then(data => {
  //       setMovieList((movies)=>[...movies, ...data]);
  //       setPopularMovie((movies)=>[...movies, ...data]);
  //     })
  //     .catch(() => {
  //       setError(true);
  //   });
  // }
  const onMoreMovie = ()  => {
    
    switch (process){
      case 'showMovieList':
        movieService.getPopularMovie(page + 1)
          .then(data => {
            setPage(page => page + 1)
            setMovieList(movies => [...movies, ...data]);
          })
        break;
      case 'showSearchList':
        movieService.getMovieSearch(search, page + 1)
          .then(data => {
            setPage(page => page + 1)
            setMovieList(movies => [...movies, ...data]);
          })
        break;
      case 'showGenreList':
        movieService.getMoviesByGenre(genre, page + 1)
          .then(data => {
            setPage(page => page + 1)
            setMovieList(movies => [...movies, ...data]);
          })
        break;
    }
  }
  useEffect(() => {
    movieService.getPopularMovie()
      .then(data => {
        setMovieList(data);
        setPopularMovie(data);
        setProcess('showMovieList')
      })
      .catch(() => {
        setProcess('error')
    });
  }, []);
  
    return (
      <Container>
        <BrowserRouter>
          <Header onPopularMovie={()=>onPopularMovieClick() } />        
          <Switch>
            <Route exact path='/'>
              <Helmet>
                <title>MovieApp</title>
              </Helmet>
              <SearchPanel onSearchPanel={(text) => setMovieSearch(text)} value={search} />  
                {setContent(process,movieList, onMoreMovie, onGenreClick, genre)}
            </Route>
            <Route exact path={'/movie/:id'}>
              <AboutMovie server={movieService} onAddToFavorite={(id) => addToFavorite(id)} favorite={favoriteMovies.slice().map(it=>it.id)}/>    
            </Route>
            <Route exact path='/favorite'>
              <Helmet>
                <title>Favorite movie</title>
              </Helmet>            
                {!favoriteMovies.length ?
                  <Empty/> :             
                <List movieList={favoriteMovies} />
                }
            </Route>
            <Route path={'/*'}>
              <Helmet>
                <title>Error</title>
              </Helmet>
              <Template image={errorImage } text={'Error loading. Please reload the page'} />
            </Route>
          </Switch>       
        </BrowserRouter>
        <GlobalStyles />
      </Container>      
    )
} 