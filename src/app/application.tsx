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

const Container = styled.div`
  width:80%;
  margin: 0 auto;
`

export default function Application() {
  const [movieList, setMovieList] = useState<Array<IMovieItem>>([]);
  const [popularMovie, setPopularMovie] = useState<Array<IMovieItem>>([]);
  const [movieId, setMovieId] = useState<number>(0)
  const [selectMovie, setSelectMovie] = useState<IMovieItem>();
  const [favoriteMovies, setFavoriteMovies] = useState<Array<IMovieItem>>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);

  const movieService = new MovieService();
  
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

  const onPopularMovieClick = () => {
    setMovieList(popularMovie);
    //add cleanSearchPanel
  }

  useEffect(() => {
    movieService.getPopularMovie()
      .then(data => {
        setLoading(false);
        setMovieList(data);
        setPopularMovie(data);
      });
  }, []);
  
    return (
      <Container>
        {/* <Main popularMovieList={movieList } movieService={movieService} /> */}
        <BrowserRouter>
          <Header onPopularMovie={()=>onPopularMovieClick() } />        
          <Switch>
            <Route exact path='/'>
              <SearchPanel onSearchPanel={(text) => setMovieSearch(text)} />
              <br/>
              {!movieList.length&&!loading?
                <p style={{color: "white"}}>Nothing</p> :
                <>    
                  {loading ? <p style={{color: "white"}}>Spinner</p> :
                    <>
                      {/* <Preview movieList={ popularMovie} /> */}
                      <List movieList={movieList}  />
                    </>
                  }  
                </>
              }              
            </Route>
            <Route exact path={'/movie/:id'}>

              <AboutMovie server={movieService} onAddToFavorite={(id) => addToFavorite(id)} favorite={favoriteMovies.map(it=>it.id)}/>    
            </Route>
            <Route exact path='/favorite'>
              {!favoriteMovies.length ?
                <p style={{ color: "white" }}>Nothing</p> :             
                <List movieList={favoriteMovies} />
              }
            </Route>
          </Switch>       
        </BrowserRouter>
      </Container>      
    )
} 