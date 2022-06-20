import classes from './ProductItemPrice.module.scss';

const ProductItemPrice = (props) => {

    return props.discount ?  (
      <div>
        <div className={classes.price_noDiscount}>{props.price.toFixed(2)} ₺</div> 
        <div className={classes.price_Discount}>{props.discount.toFixed(2)} ₺</div> 
      </div>
    ) : (
      <div>
        <div className={classes.price}>{props.price.toFixed(2)} ₺</div> 
      </div>
    );
};

export default ProductItemPrice;
