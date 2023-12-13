import Movie from './Movie';

const Movies = ({ movies }) => {
  // const moviess = movies.movies;
  const moviess = Object.values(movies)[0];
  return (
    <div className='movies'>
      {moviess && moviess.length ? (
        moviess.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
};

export default Movies;
