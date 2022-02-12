import styles from "./episode.module.css";
import { FaCheckCircle } from "react-icons/fa";

export default () => {
  return (
    <div className={styles.ep}>
      <div className={styles.info}>
        <strong>01</strong>
        <p>Lorem ipsum dolor sit amet</p>
        <div className={styles.icon}>
          <FaCheckCircle color="var(--color-yellow)" size={25} />
        </div>
      </div>
    </div>
  );
};
