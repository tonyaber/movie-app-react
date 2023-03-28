import {formatTime, formatDate} from '../src/utils/format';


describe('function formatTime',()=>{
    test('add time less than a hour',()=>{
        expect(formatTime(20)).toBe('00 : 20');
        expect(formatTime(9)).toBe('00 : 09');
    });
    test('add difrent time',()=>{
        expect(formatTime(60)).toBe('1 : 00');
        expect(formatTime(119)).toBe('1 : 59');
        expect(formatTime(120)).toBe('2 : 00');
        expect(formatTime(121)).toBe('2 : 01');
        
    });
})

describe('funcion FormatDate', ()=>{
    test('add date', ()=>{
        expect(formatDate('2022-02-05')).toBe('2022')
    })
})