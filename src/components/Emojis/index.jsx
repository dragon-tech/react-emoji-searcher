import PropTypes from "prop-types";
import styles from "./Emojis.module.css";
import EmojiBox from "../EmojiBox";

const Emojis = ({ emojisData }) => {
  return (
    <div className={styles.emojisGrid}>
      {emojisData.map((data, index) => (
        <EmojiBox key={index} title={data.title} symbol={data.symbol} />
      ))}
    </div>
  );
};

Emojis.propTypes = {
  emojisData: PropTypes.array,
};

export default Emojis;
