import React from "react";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <>
      <Header />
      <div id='main'>
        <Meals />
      </div>
    </>
  );
};

export default App;
