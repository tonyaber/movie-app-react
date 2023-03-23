import { render,fireEvent ,screen} from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '@testing-library/jest-dom'
import GenreList from '../src/genre/genreList';
import Header from '../src/header/header';

describe('header', ()=>{
    test('click on logo', ()=>{
        const onClick = jest.fn();
        const header = render(
        <BrowserRouter>
            <Header onPopularMovie={onClick}/>
        </BrowserRouter>);
        const logo = header.getByTestId('logo');
        fireEvent.click(logo);
        expect(onClick).toHaveBeenCalled();
    })

    test('click on favorite', async ()=>{
        const header = render(
            <BrowserRouter>
                <Route exact path='/'>
                    <Header onPopularMovie={()=>{}}/>
                    <GenreList onGenreClick={()=>{}} genreActive={0}/>
                </Route>
            </BrowserRouter>);
        const favoriteBtn = header.getByTestId('favorite-button');
        expect(screen.getAllByTestId('genre')[0]).toBeInTheDocument();
        fireEvent.click(favoriteBtn);
        expect(screen.queryByTestId('genre')).not.toBeInTheDocument();
    })
})