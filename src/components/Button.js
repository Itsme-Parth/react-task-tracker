import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  // const onClick = (e) => {
  //   console.log(e, "Button Clicked");
  // };
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
