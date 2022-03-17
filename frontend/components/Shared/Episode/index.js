import styles from "./episode.module.css";
import { FaCheckCircle } from "react-icons/fa";

export default ({ number_episode, name }) => {
  return (
    <div className={styles.ep}>
      <div className={styles.info}>
        <strong>{number_episode}</strong>
        <p>{name}</p>
        <div className={styles.icon}>
          <FaCheckCircle color="var(--color-yellow)" size={25} />
        </div>
      </div>
    </div>
  );
};
