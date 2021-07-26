import { useState } from 'react';
// import { toast } from 'react-toastify';
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
      //   toast.warn('Enter valid name,please!');
      return;
    }
    onSubmit(name);
    setName('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
       

        <input
          onChange={handleNameChange}
          className={s.SearchFormInput}
          type="text"
          value={name}
          placeholder="Search Movies"
              />
               
              <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}></span>
        </button>
      </form>
    </header>
  );
}
