import { useState, useEffect } from 'react';
import Product from '../Product';

const ProductsContainer = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://golden-whispering-show.glitch.me')
      .then((res) => res.json())
      .then((jsonResponse) => {
        setTimeout(() => {
          setProducts(jsonResponse);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (products === null) {
    return <div>Loading....</div>;
  } else {
    return (
      <div>
        {products.map((product) => {
          return <Product price={product.price} src={product.image} title={product.title} key={product.id} />;
        })}
      </div>
    );
  }
};

export default ProductsContainer;
