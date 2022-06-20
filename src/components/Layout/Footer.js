import { Fragment } from 'react';

import CartButton from './CartButton';
import NavButton from './NavButton';
import classes from './Footer.module.scss';

const Footer = (props) => {
  return (
    <Fragment>
      <footer className={classes.footer}>
        <NavButton onClick={props.onShowCart} />
        <CartButton/>
      </footer>
    </Fragment>
  );
};

export default Footer;
