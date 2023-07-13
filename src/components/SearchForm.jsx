import React from 'react'
import { useGlobalcontext } from '../hooks/context';
import { useRef } from 'react';

const SearchForm = () => {
    const { setSearchValue } = useGlobalcontext();
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const inputContainer = useRef();
    const searchMeal = () => {
        setSearchValue(inputContainer.current.value);
    }
  return (
      <div className=' my-2'>
          <form onSubmit={handleSubmit} className='w-100 w-md-50 mx-auto'> 
              <label htmlFor="name" className='form-label text-success fw-bold fs-4 text-center'>
                  Search For your Favorite Meal
              </label>
              <input
                  type="text" className="form-control outline-0" id='name'
                  ref={inputContainer}
                  onChange={searchMeal}
              />
          </form>
    </div>
  )
}

export default SearchForm