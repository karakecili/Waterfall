import { useContext } from 'react';

import ProductItemButtons from './ProductItemButtons';
import ProductItemPrice from './ProductItemPrice';
import classes from './ProductItem.module.scss';
import CartContext from '../../../store/cart-context';

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      discount: props.discount,
      price: props.price
    });
  };

  const removeFromCartHandler = () => {
    cartCtx.removeItem(props.id)
  }

  return (
    <div className={classes.Product}>
      <div className={classes.ImageBox}>
        <img src={require('../../../assets/' + props.image)} className={classes.image} alt={props.image}></img>
      </div>
      <div className={classes.ProcessBox}>
        <h3>{props.name}</h3>
        <ProductItemPrice price={props.price} discount={props.discount}/>
        <ProductItemButtons id={props.id} onAddToCart={addToCartHandler} onRemoveFromCart={removeFromCartHandler} />
      </div>
    </div>
  );
};

export default ProductItem;
