import React from 'react';
import styles from '../styles/Dropdown.module.css';

const Dropdown = ({ suggestions, onSelect }) => {
  return (
    <div className={styles.dropdown}>
      {suggestions.map((item) => (
        <div
          key={item.id}
          className={styles.dropdownItem}
          onClick={() => onSelect(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;