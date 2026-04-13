import React from 'react';
import { MovieList } from './components/MovieList';

export function App() {
  const movies = [
    {
      name: 'Inception',
      date: '2010',
      genre: 'Sci-Fi',
      plot: 'A thief who steals corporate secrets through dream-sharing technology is given a chance to erase his criminal history.',
      imdbLink: 'https://www.imdb.com/title/tt1375666/',
      imgUrl: 'https://m.media-amazon.com/images/I/51s+FJ6K8fL._AC_.jpg'
    },
    {
      name: 'The Dark Knight',
      date: '2008',
      genre: 'Action',
      plot: 'Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos.',
      imdbLink: 'https://www.imdb.com/title/tt0468569/',
      imgUrl: 'https://m.media-amazon.com/images/I/71pox6ZhCWL._AC_SY679_.jpg'
    },
    {
      name: 'Interstellar',
      date: '2014',
      genre: 'Adventure',
      plot: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
      imdbLink: 'https://www.imdb.com/title/tt0816692/',
      imgUrl: 'https://m.media-amazon.com/images/I/71n58R4Q5mL._AC_SY679_.jpg'
    },
    {
      name: 'Fight Club',
      date: '1999',
      genre: 'Drama',
      plot: 'An insomniac office worker and a soap maker create an underground fight club that grows into something much bigger.',
      imdbLink: 'https://www.imdb.com/title/tt0137523/',
      imgUrl: 'https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg'
    },
    {
      name: 'The Matrix',
      date: '1999',
      genre: 'Sci-Fi',
      plot: 'A computer hacker discovers the truth about reality and his role in the war against its controllers.',
      imdbLink: 'https://www.imdb.com/title/tt0133093/',
      imgUrl: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg'
    }
  ];

  return (
    <div>
      <h1>Movie List</h1>
      <MovieList movies={movies} />
    </div>
  );
}