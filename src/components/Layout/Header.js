import React from 'react';

import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.scss';

const Header = () => {

  const { header, 'main-image': mainImage } = styles;

  return (
    <>
      <header className={header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={mainImage}>
        <img src={mealsImage} alt='Looks very delicious meals' />
      </div>
    </>
  );
};

export default Header;