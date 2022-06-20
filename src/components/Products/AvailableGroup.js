import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableGroup.module.scss';

const DUMMY_Groups = [
  {
    id: 'g1',
    name: 'Cam Damacana',
  },
  {
    id: 'g2',
    name: 'Damacana',
  },
  {
    id: 'g3',
    name: 'Kutu Su',
  },
  {
    id: 'g4',
    name: 'Pet Şişe',
  },
  {
    id: 'g5',
    name: 'Bardak Su',
  },
  {
    id: 'g6',
    name: 'Cam Şişe',
  },
];

const AvailableGroup = () => {
  const Products_List = DUMMY_Groups.map((Product) => (
    <ProductItem
      key={Product.id}
      id={Product.id}
      name={Product.name}
      description={Product.description}
      price={Product.price}
    />
  ));

  return (
    <section className={classes.Products}>
      <div className={classes.ProductList}>{Products_List}</div>
    </section>
  );
};

export default AvailableGroup;
