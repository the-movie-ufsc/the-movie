import styles from "./about.module.css";
import Episode from "../../components/Shared/Episode";
import Menu from "../../components/Shared/Menu";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <div className={styles.effect}></div>
        <img
          src="https://wallpaperaccess.com/full/6760532.jpg"
          className={styles.image}
        />

        <Menu />

        <div className={styles.info}>
          <div className={styles.about}>
            <h1 className={styles.title}>To Your Eternity</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              dictum id nulla sit amet pulvinar. Cras vitae fringilla justo,
              viverra consequat magna. Nam dictum id nulla sit amet pulvinar.
              Nam dictum id nulla sit amet pulvinar. Cras vitae fringilla justo,
              viverra consequat magna.
            </p>
          </div>

          <div className={styles.geral}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className={styles.progress}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      <div className={styles.eps}>
        <Episode />
        <Episode />
      </div>
    </div>
  );
}
