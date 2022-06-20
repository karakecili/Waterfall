import { useState } from 'react';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Products from './components/Products/Products';
import CartProvider from './store/CartProvider';
import NavMenu from './components/Layout/NavMenu'

import './App.scss';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && 
        <NavMenu onClose={hideCartHandler} />
      }
      <Header  />
      <main>
        <Products />
      </main>

      <Footer onShowCart={showCartHandler} />
    </CartProvider>
  );
}

export default App;
