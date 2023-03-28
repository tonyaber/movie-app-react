import MovieService from '../src/service/movieService';
const fetch = require('node-fetch');
window.fetch = fetch;

describe('MovieService', () => {
  const movieService = new MovieService();
    it('return a list of popular movies', async () => {
      const movies = await movieService.getPopularMovie();
      expect(movies.length).toBe(20);
      expect(Array.isArray(movies)).toBe(true);
      expect(movies[0]).toHaveProperty('id');
      expect(movies[0]).toHaveProperty('title');
      expect(movies[0]).toHaveProperty('overview');
      expect(movies[0]).toHaveProperty('poster_path');
      expect(movies[0]).toHaveProperty('vote_average');
      expect(movies[0]).toHaveProperty('vote_count');
    });

    it('return a specific page of popular movies', async () => {
      const page = 2;
      const movies = await movieService.getPopularMovie(page);
      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBe(20);
      expect(movies[0]).toHaveProperty('id');
      expect(movies[0]).toHaveProperty('title');
      expect(movies[0]).toHaveProperty('overview');
      expect(movies[0]).toHaveProperty('poster_path');
      expect(movies[0]).toHaveProperty('vote_average');
      expect(movies[0]).toHaveProperty('vote_count');
    });

    it('return movie',async ()=>{
      const number = 76600;
      const movie = await movieService.getMovie(number);
      expect(movie).toHaveProperty('id');
      expect(movie).toHaveProperty('title');
      expect(movie).toHaveProperty('overview');
      expect(movie).toHaveProperty('poster_path');
      expect(movie).toHaveProperty('vote_average');
      expect(movie).toHaveProperty('vote_count');
    })

    it('return movies after searching', async ()=>{
      const text = 'hello';
      const movies = await movieService.getMovieSearch(text);
      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBe(20);
      expect(movies[0]).toHaveProperty('id');
      expect(movies[0]).toHaveProperty('title');
      expect(movies[0]).toHaveProperty('overview');
      expect(movies[0]).toHaveProperty('poster_path');
      expect(movies[0]).toHaveProperty('vote_average');
      expect(movies[0]).toHaveProperty('vote_count');
    })
    it('return actors', async ()=>{
      const number = 76600;
      const actors = await movieService.getActors(number);
      expect(Array.isArray(actors.cast)).toBe(true);
      expect(actors.cast.length).toBeGreaterThan(0);
      expect(actors.cast[0]).toHaveProperty('gender');
      expect(actors.cast[0]).toHaveProperty('id');
      expect(actors.cast[0]).toHaveProperty('name');
      expect(actors.cast[0]).toHaveProperty('original_name');
      expect(actors.cast[0]).toHaveProperty('profile_path');
      expect(actors.cast[0]).toHaveProperty('character');
    })
    it('return a list of movies by genre', async ()=>{
      const genre = 35;
      const movies = await movieService.getMoviesByGenre(genre);
      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBe(20);
      expect(movies[0]).toHaveProperty('id');
      expect(movies[0]).toHaveProperty('title');
      expect(movies[0]).toHaveProperty('overview');
      expect(movies[0]).toHaveProperty('poster_path');
      expect(movies[0]).toHaveProperty('vote_average');
      expect(movies[0]).toHaveProperty('vote_count');
    })

});