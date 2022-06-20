import { Fragment } from 'react';

import logo from '../../assets/waterfall.png';
import classes from './Header.module.scss';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={logo} alt='Waterfall Natural Spring Water!' />
      </header>
    </Fragment>
  );
};

export default Header;
