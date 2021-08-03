import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* Adding onClick as a prop */}
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

/* Default props not working? */
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
