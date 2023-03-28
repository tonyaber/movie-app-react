import { render,fireEvent } from '@testing-library/react';
import React from 'react';
import GenreList from '../src/genre/genreList';
import Genre from '../src/genre/genre';

describe('Genre', ()=>{
    test('add component', ()=>{
        const genre = render(<Genre text={'comedy'} active={false} onClick={()=>{}} isShow={false}/>);
        const el =  genre.getByTestId('genre');
        expect(el.textContent).toBe('comedy');
    })

    test('click on genre', ()=>{
        const onClick = jest.fn();
        const genre = render(<Genre text={'comedy'} active={false} onClick={onClick} isShow={false}/>);
        const el =  genre.getByTestId('genre');
        fireEvent.click(el);
        expect(onClick).toHaveBeenCalled();
    })

    test('change genre', ()=>{
        const onClick = jest.fn((id)=>id);
        const genreList = render(<GenreList onGenreClick={onClick} genreActive={0}/>);
        const el = genreList.getByText('comedy');
        fireEvent.click(el);
        expect(onClick).toHaveBeenCalled();
        expect(onClick).toHaveBeenCalledWith(35)       
    });
})