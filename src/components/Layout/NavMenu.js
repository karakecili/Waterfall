
import Modal from './Modal';
import classes from './NavMenu.module.scss';

const NavMenu = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.MenuMain}>
        
        <button className={classes.MenuItem}>
          <span>Adreslerim</span>
        </button>
        
        <button className={classes.MenuItem}>
          <span>Önceki Siparişlerim</span>
        </button>
        
        <button className={classes.MenuItem}>
          <span>İletişim</span>
        </button>
      </div>
    </Modal>
  );
};

export default NavMenu;
