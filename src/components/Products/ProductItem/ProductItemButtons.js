import { useContext } from 'react';

import classes from './ProductItemButtons.module.scss';
import CartContext from '../../../store/cart-context';

const ProductItemButtons = (props) => {
  const cartCtx = useContext(CartContext);
  const item = cartCtx.items.find(x => x.id === props.id) ?? null;
  const hasItems = item !== null;

  const increase = (event) => {

    props.onAddToCart(1);
  }

  const decrease = (event) => {

    props.onRemoveFromCart();
  }

  return (
    <div className={classes.button_List}>
    
      
      <div onClick={increase} className={classes.button}>+</div>
      {hasItems && 
        <div className={classes.amount}>{item.amount}</div>
      }

      {hasItems && 
        <div onClick={decrease} className={classes.button}>-</div>
      }

    </div>
  );
};

export default ProductItemButtons;
