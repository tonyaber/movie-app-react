export default class MovieService {
    _apiBase = 'https://api.themoviedb.org/';
    _apiKey = 'api_key=cbf6d6f193d7d4a9b8ee613671126788';
    _page:number;
    constructor(){
        this._page = 1;
        console.log('constructor')
        this.getMoviesByGenre(35);
    }
    getResource = async (url: string) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        
        return await res.json();
    }

    getPopularMovie = (page:number=1) => {
        return this.getResource(`${this._apiBase}3/movie/popular?${this._apiKey}&language=$en-US&page=${page}`).then(data => data.results);
    }

    getMovie = (id: number) => {
        return this.getResource(`${this._apiBase}3/movie/${id}?${this._apiKey}&language=en-US`);
    }

    getMovieSearch = (text: string, page:number=1) => { 
        return this.getResource(`${this._apiBase}3/search/movie?${this._apiKey}&query=${text}&page=${page}&include_adult=false`).then(data => data.results);
    }

    getActors = (id:number) => {
        return this.getResource(` ${this._apiBase}3/movie/${id}/credits?${this._apiKey}&append_to_response=videos`)
    }

    getMoviesByGenre = (genre:number, page:number=1) => {
        return this.getResource(`${this._apiBase}3/discover/movie?${this._apiKey}&language=$en-US&page=${page}&with_genres=${genre}&include_adult=false`).then(data => data.results);
    }

}