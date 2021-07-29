import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click ME!!");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* Adding onClick as a prop */}
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

/* Default props not working?*/
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS
// const headingStyles = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
