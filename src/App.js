import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from "./components/Cart/Cart";

const App = () => {

  // 장바구니 모달 열고닫는 상태변수
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <div id='main'>
        <Meals />
      </div>
    </>
  );
};

export default App;
