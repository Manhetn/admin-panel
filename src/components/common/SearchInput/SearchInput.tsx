import React from 'react';
import './styles.scss';
import { IconSearch } from '@icons';

interface ISearchInput {
  value: string;
  handleChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<ISearchInput> = ({
  value,
  handleChange,
  placeholder = 'Поиск',
}) => {
  return (
    <div className="search-input">
      <IconSearch stylesClass="search-input__icon" size={16} />
      <input
        className="search-input__input"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
