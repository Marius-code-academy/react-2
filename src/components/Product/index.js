const Product = (props) => {
  const { price, title, src } = props;
  return (
    <div>
      <img src={src} alt="produktas" />
      <p>{title}</p>
      <p>{price}</p>
      <button>Ištrinti</button>
    </div>
  );
};

export default Product;
