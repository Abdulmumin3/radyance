import PropTypes from "prop-types";

const Testimonial = ({ imagePath, name, quote }) => {
  return (
    <div className="testimonial text-white">
      <div className="flex items-center gap-2">
        <div>
          <img src={imagePath} alt={name} />
        </div>
        <div>
          <span>{name}</span>
          <img className="" src="../public/images/small.png" />
        </div>
      </div>

      <p>&quot;{quote}&quot;</p>
    </div>
  );
};

Testimonial.propTypes = {
  imagePath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Testimonial;
