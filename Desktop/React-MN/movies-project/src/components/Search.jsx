import { useState } from 'react';

const Search = ({ searchMovies }) => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('All');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(
      () => e.target.dataset.type,
      () => searchMovies(search, type),
    );
  };

  return (
    <div className='row'>
      <div className='col s12'>
        <div className='input-field'>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
            className='validate'
            placeholder='search'
            type='search'
          />
          <button
            className='btn search-btn blue darken-1'
            onClick={() => searchMovies(search, type)}>
            Search
          </button>
        </div>
        <div className='checkbox'>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              checked={type === 'all'}
              data-type='all'
              onChange={handleFilter}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              checked={type === 'movie'}
              data-type='movie'
              onChange={handleFilter}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              checked={type === 'series'}
              data-type='series'
              onChange={handleFilter}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Search;
