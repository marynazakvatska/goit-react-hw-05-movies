import { useState } from 'react';
import s from './Searchbar.module.css';
// import PropTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  const [name, setName] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
     
      return;
    }
    onSubmit(name);
    setName('');
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
       

        <input
          onChange={handleNameChange}
          className={s.SearchFormInput}
          type="text"
          value={name}
          placeholder="Search Movies"
              />
               
              <button type="submit" className={s.searchFormButton}>Search
   
        </button>
      </form>
    </header>
  );
}
