import React from 'react';
import styles from '../styles/Dropdown.module.css';

const Dropdown = ({ suggestions, onSelect }) => {
  return (
    <div className={styles.dropdown}>
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className={styles.dropdownItem}
          onClick={() => onSelect(suggestion)}
        >
          {suggestion}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
