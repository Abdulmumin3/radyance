import PropTypes from "prop-types";

const PopularItem = ({ imagePath, title, text, price }) => {
  return (
    <div className="item">
      <img className="h-64" src={imagePath} alt={title} />
      <p className="mb-2 font-bold">{title}</p>
      <p className="mb-2">{text}</p>
      <div className="flex justify-between">
        <span className="font-bold">${price}</span>
        <img src="../public/images/shop.png" className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

PopularItem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default PopularItem;
