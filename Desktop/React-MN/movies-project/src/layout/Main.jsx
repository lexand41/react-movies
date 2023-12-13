import React, { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((data) => {
        setState({ movies: data.Search });
        setLoading(false);
      });
  }, []);

  const searchMovies = (str, type = 'all') => {
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setState({ movies: data.Search });
      });
  };

  return (
    // <main className='container content'>
    //   <Search searchMovies={searchMovies} />
    //   {movies && movies.length ? (
    //     <Movies movies={state} />
    //   ) : (
    //     <h3>
    //       <Preloader />
    //     </h3>
    //   )}
    // </main>
    <main className='container content'>
      <Search searchMovies={searchMovies} />
      {loading ? (
        <h3>
          <Preloader />
        </h3>
      ) : (
        <Movies movies={state} />
      )}
    </main>
  );
};

export default Main;
