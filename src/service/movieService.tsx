export default class MovieService {
    _apiBase = 'https://api.themoviedb.org/';
    _apiKey = 'api_key=cbf6d6f193d7d4a9b8ee613671126788';

    getResource = async (url: string) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getPopularMovie = () => { console.log(1)
        return this.getResource(`${this._apiBase}3/movie/popular?${this._apiKey}&language=$en-US&page=1`).then(data => data.results);
    }

    getMovie = (id: number) => {
        return this.getResource(`${this._apiBase}3/movie/${id}?${this._apiKey}&language=en-US`);
    }

}
