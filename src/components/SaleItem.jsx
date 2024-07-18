import PropTypes from "prop-types";

const Item = ({ imagePath, title, price, text, originalPrice }) => {
  return (
    <div className="item">
      <img className="h-64" src={imagePath} alt={title} />
      <p className="mb-2 font-bold">{title}</p>
      <p className="mb-2">{text}</p>
      <div className="flex justify-between">
        <span className="font-bold  text-pink-700 text-lg">${price}</span>
        <span className="font- -ml-14 text-sm mt-2">${originalPrice}</span>
        <img src="../public/images/cart2.png" className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

Item.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number.isRequired,
};

export default Item;
