import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProducts.module.scss';

const DUMMY_Products = [
  {
    id: 'p1',
    name: '19 lt Damacana',
    image: 'damacana19.png',
    group: 'g2',
    price: 27.5,
    discount: 25,
  },
  {
    id: 'p2',
    name: '15 lt Damacana',
    image: 'damacana15.png',
    group: 'g1',
    price: 32.5,
  },
  {
    id: 'p3',
    name: '5 lt Pet Şişe',
    image: 'pet5.png',
    group: 'g4',
    price: 44,
  },
  {
    id: 'p4',
    name: '1,5 lt Pet Şişe',
    image: 'pet1,5.png',
    group: 'g4',
    price: 44,
  },
  {
    id: 'p5',
    name: '0,50 lt Pet Şişe',
    image: 'pet0,5.png',
    group: 'g4',
    price: 44,
  },
  {
    id: 'p6',
    name: '180 cc Bardak Su',
    image: 'bardak.png',
    group: 'g5',
    price: 49,
    discount: 45,
  },
  {
    id: 'p7',
    name: '19 lt Damacana + Değişim',
    image: 'damacana19.png',
    group: 'g2',
    price: 37.5,
  },
  {
    id: 'p8',
    name: '19 lt Damacana + Depozito',
    image: 'damacana15.png',
    group: 'g2',
    price: 112.5,
  },
  {
    id: 'p9',
    name: 'Cam Damacana + Depozito',
    image: 'damacana15.png',
    group: 'g1',
    price: 18.99,
  },
  {
    id: 'p10',
    name: 'Cam Damacana + PC Değişim',
    image: 'damacana15.png',
    group: 'g1',
    price: 18.99,
  },
];

const AvailableProducts = () => {
  const Products_List = DUMMY_Products.map((Product) => (
    <ProductItem
      key={Product.id}
      id={Product.id}
      name={Product.name}
      group={Product.group}
      image={Product.image}
      price={Product.price}
      discount={Product.discount}
    />
  ));

  return (
    <section className={classes.Products}>
      <div className={classes.Products_List}>{Products_List}</div>
    </section>
  );
};

export default AvailableProducts;
