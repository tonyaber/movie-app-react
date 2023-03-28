import { render,fireEvent ,screen} from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '@testing-library/jest-dom'
import List from '../src/list/list'

describe('Movie List', ()=>{
    const list = new Array(5).fill(null).map(it=>it={
        adult: true,
        backdrop_path: 'string',
        genre_ids: '',
        id: 0,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        release_date: '',
        title: '',
        video: true,
        vote_average: 0,
        vote_count: 0,
        runtime: 0,
        tagline: '',
        favorite: false,
        production_companies: [{
          id: 0,
          logo_path: '',
        }]
    });

    test('create Movie List', ()=>{
        const movieList = render(
            <BrowserRouter>
                <List movieList={list}/>
            </BrowserRouter>);
        const movieItems = movieList.getAllByTestId('movie-item');
        expect(movieItems).toHaveLength(5);
    });

    test('click on movie', ()=>{
        const movieList = render(
            <BrowserRouter>
                <Route exact path='/'>
                    <List movieList={list.slice(0,1)}/>
                </Route>               
            </BrowserRouter>);
        const movieItems = movieList.getByTestId('movie-item');
        fireEvent.click(movieItems);
        expect(screen.queryByTestId('movie-item')).not.toBeInTheDocument();
    });
})