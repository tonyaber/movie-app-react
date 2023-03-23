import { render,fireEvent ,screen} from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '@testing-library/jest-dom'
import SearchPanel from '../src/header/searchPanel';

describe('Search Panel',()=>{
    test('create with empty value', ()=>{
        const searchPanel = render(<SearchPanel onSearchPanel={()=>{}} value=''/>);
        const input = searchPanel.getByTestId('search-panel');
        expect(input).toHaveValue('');
    })

    test('create with some value', ()=>{
        const value = 'some test text';
        const searchPanel = render(<SearchPanel onSearchPanel={()=>{}} value={value}/>);
        const input = searchPanel.getByTestId('search-panel');
        expect(input).toHaveValue(value);
    })

    test('add new value', async ()=>{
        const onChange = jest.fn(value=>value);
        render(<SearchPanel onSearchPanel={onChange} value=''/>);
        const value = 'some test text';
        fireEvent.input(screen.getByTestId('search-panel'), {
            target: {
              value: value,
            }
          });
        expect(onChange).toHaveBeenCalled();
        expect(onChange).toHaveBeenCalledWith(value);
    })
})