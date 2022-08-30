import { useState,useEffect } from "react";
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
import FavoriteButton from "../header/favoriteButton";
import SearchPanel from "../header/searchPanel";

export default function Application() {
  const [movieList, setMovieList] = useState<Array<IMovieItem>>([]);
  const [popularMovie, setPopularMovie] = useState<Array<IMovieItem>>([]);
  const [movieId, setMovieId] = useState<number>(0)
  const [selectMovie, setSelectMovie] = useState<IMovieItem>();
  const [favoriteMovies, setFavoriteMovies] = useState<Array<IMovieItem>>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  //const [error, setError] = useState<Boolean>(false);
  const movieService = new MovieService();

  const setMovie = (id: number) => {
    setLoading(true);    
    setMovieId(id);
    const favorite = isFavorite(id);
    const movie = movieList.find(item => item.id === id);
    if (movie) {
      setSelectMovie({...movie, favorite});
      //setError(false);
      setLoading(false);
    // } else {
    //    movieService.getMovie(id).then((data) => {
    //     setSelectMovie({...data, favorite});
    //     setError(false);
    //     setLoading(false);      
    //   }).catch(() => {
    //     setError(true);
    //   })
    }
  };
  
  const setMovieSearch = (text: string) => {
    setLoading(true);
    if (!text.length) {      
      setMovieList(popularMovie);
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

  const isFavorite = (id: number) => {
    return Boolean(favoriteMovies.find(it => it.id === id));
  }

  const setFavoriteList = () => {
    setMovieList(favoriteMovies);
  }

  useEffect(() => {
    setLoading(true);
    movieService.getPopularMovie()
      .then(data => {
        setLoading(false);
        setMovieList(data);
        setPopularMovie(data)
      });
  }, []);
  
    return (
      <>
        <BrowserRouter>
          <Header onPopularMovie={()=>setMovieList(popularMovie) }  onSearchPanel = {(text)=>setMovieSearch(text)} />        
          <Switch>
            <Route exact path='/'>
              <SearchPanel onSearchPanel={(text) => setMovieSearch(text)} /> 
              <FavoriteButton onFavoriteClick={()=>setFavoriteList()}/>
              <br/>
              {loading ? <p>Spinner</p> :  <Preview />}
              {!movieList.length&&!loading?
                <p>Nothing</p> :
                <>    
                {loading?<p>Spinner</p>: <List movieList={movieList} onSelect={(id)=>setMovie(id)} />}  
                </>
              }              
            </Route>
            <Route exact path={'/movie' + movieId}>
              {error?<p>error</p>:null}
              {loading ? <p>Spinner</p> : <AboutMovie item={selectMovie}  onAddToFavorite={(id)=>addToFavorite(id) }  />}     
            </Route>
          </Switch>       
        </BrowserRouter>
      </>      
    )
} 