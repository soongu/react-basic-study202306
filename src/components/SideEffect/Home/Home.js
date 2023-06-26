import React from 'react';

import Card from '../../UI/Card';
import styles from './Home.module.css';
import Button from '../../UI/Button';

const Home = ({onLogout}) => {
  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
