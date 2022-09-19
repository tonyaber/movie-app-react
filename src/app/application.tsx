import { useState,useEffect } from "react";
import Header from '../header/header';
import Preview from '../preview/preview';
import List from '../list/list';
import AboutMovie from '../aboutMovie/aboutMovie';
import Spinner from '../spinner/spinner';
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
  width:80%;
  margin: 100px auto 0;
`

export default function Application() {
  const [movieList, setMovieList] = useState<Array<IMovieItem>>([]);
  const [popularMovie, setPopularMovie] = useState<Array<IMovieItem>>([]);
  const [selectMovie, setSelectMovie] = useState<IMovieItem>();
  const [favoriteMovies, setFavoriteMovies] = useState<Array<IMovieItem>>([]);
  const [search, setSearch] = useState<string>('');
  const [process, setProcess] = useState<string>('loading');

  const movieService = new MovieService();
  // const model = new Model();
  // const controller = new Controller(model, movieService);
  
  const setMovieSearch = (text: string) => {
    setSearch(text);
    setProcess('loading')
    if (!text.length) {      
      setMovieList(popularMovie);
      setSearch('');
      setProcess('showMovieList')
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

  const onPopularMovieClick = () => {
    setMovieList(popularMovie);
    setSearch('');
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
                {setContent(process,movieList)}
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
                  <List movieList={favoriteMovies}/>
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