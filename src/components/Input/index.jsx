import PropTypes from "prop-types";
import styles from "./Input.module.css";
const Input = ({ onChange, value }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      placeholder="Search"
      className={styles.input}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
