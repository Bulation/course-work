import { FormEvent, useEffect, useState } from 'react';
import { useSearchParams, createSearchParams } from 'react-router-dom';
import { setSearchValue } from '../redux/slices/newsSlice';
import { useAppDispatch } from './reduxHooks';

export default function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams('');
  const urlValue = searchParams.get('q') || '';
  const [inputValue, setInputValue] = useState(urlValue);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchValue(inputValue));
  };
  useEffect(() => {
    setSearchParams(createSearchParams({ q: inputValue }));
    if (inputValue === '') {
      dispatch(setSearchValue(inputValue));
    }
  }, [inputValue]);
  return { setInputValue, inputValue, handleChange, handleSubmit };
}
