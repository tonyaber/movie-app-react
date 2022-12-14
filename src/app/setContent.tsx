import { IMovieItem } from '../dto';
import Template from '../template/template';
import Spinner from '../spinner/spinner';
import List from '../list/list';
import errorImage from '../assets/svg/error-animated.svg';
import emptyImage from '../assets/svg/search-animated.svg';
import React from 'react';
import Preview from '../preview/preview';
import { Button } from '../preview/button';
import GenreList from '../genre/genreList'

export function setContent(process: string, data: IMovieItem[],onMoreClick:()=>void,onGenreClick:(id:number)=>void, genre:number) {
  switch (process) {
    case 'loading':
      return <Spinner />;
      break;
    case 'error':
      return <Template image={errorImage} text={'Error loading. Please reload the page'} />
      break;
    case 'empty':
      return <Template image={emptyImage} text={'Sorry, nothing found...'} />
      break;
    case 'showMovieList':
      return (
        <>
          <Preview movieList={data.slice(0, 5)} />
          <GenreList onGenreClick={(id)=>onGenreClick(id)}  genreActive={genre}/>
          <List movieList={data} />
          <Button text={'More'} onClick={()=>onMoreClick()}></Button>
        </>);    
      break;
    case 'showSearchList':
      return(
        <>
          <List movieList={data} />
          <Button text={'More'} onClick={()=>onMoreClick()}></Button>
        </>);
      break;
    case 'showGenreList':
      return(
        <>
          <GenreList onGenreClick={(id) => onGenreClick(id)} genreActive={genre} />
          <List movieList={data} />
          <Button text={'More'} onClick={()=>onMoreClick()}></Button>
        </>);
      break;
  }

}